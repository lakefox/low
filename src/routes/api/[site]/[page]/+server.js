import { error } from '@sveltejs/kit';
import PocketBase from '/node_modules/pocketbase/dist/pocketbase.es.mjs';
const pb = new PocketBase('https://api.low.sh/');

export function GET({ params, url, request }) {
    return new Promise((resolve, reject) => {
        pb.collection('comments').getList(1, 100, {
            filter: `site = "${params.site}" && page = "${params.page}"`
        }).then((data) => {
            let comments = data.items.map(e => {
                return { contents: e.contents, created: timestamp(e.created), id: e.id };
            })
            let res = new Response(JSON.stringify(comments));
            res.headers.append('Access-Control-Allow-Origin', "*");
            resolve(res);
        });
    }).catch(() => {
        throw error(404, 'Not found');
    })
}
function timestamp(ts) {
    const today = new Date(ts);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return mm + '/' + dd + '/' + yyyy;
}

/** @type {import('./$types').RequestHandler} */
export function POST({ params, request }) {
    console.log("posts");
    return new Promise(async (resolve, reject) => {
        let req = await request.json();
        console.log(req);
        const data = {
            "site": params.site,
            "page": params.page,
            "contents": req.contents
        };

        pb.collection('comments').create(data).then(() => {
            pb.collection('comments').getList(1, 100, {
                filter: `site = "${params.site}" && page = "${params.page}"`
            }).then((data) => {
                let comments = data.items.map(e => {
                    return { contents: e.contents, created: timestamp(e.created), id: e.id };
                })
                resolve(new Response(JSON.stringify(comments)));
            });
        });
    });
}