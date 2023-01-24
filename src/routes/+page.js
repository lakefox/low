import { error } from '@sveltejs/kit';
import PocketBase from '/node_modules/pocketbase/dist/pocketbase.es.mjs';
const pb = new PocketBase('https://api.low.sh/');

export function load() {
    return new Promise((resolve, reject) => {
        pb.collection('comments').getList(1, 100, {
            filter: `site = "decode" && page = "index"`
        }).then((data) => {
            let comments = data.items.map(e => {
                return { contents: e.contents, created: timestamp(e.created), id: e.id };
            })
            resolve({ comments: comments });
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