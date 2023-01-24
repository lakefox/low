import { e as error } from './index-2f6c9910.js';
import { C } from './pocketbase.es-350cfbff.js';

const pb = new C("https://api.low.sh/");
function load() {
  return new Promise((resolve, reject) => {
    pb.collection("comments").getList(1, 100, {
      filter: `site = "decode" && page = "index"`
    }).then((data) => {
      let comments = data.items.map((e) => {
        return { contents: e.contents, created: timestamp(e.created), id: e.id };
      });
      resolve({ comments });
    });
  }).catch(() => {
    throw error(404, "Not found");
  });
}
function timestamp(ts) {
  const today = new Date(ts);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10)
    dd = "0" + dd;
  if (mm < 10)
    mm = "0" + mm;
  return mm + "/" + dd + "/" + yyyy;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-e628b527.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-18d10cff.js';
const imports = ["_app/immutable/components/pages/_page.svelte-18d10cff.js","_app/immutable/chunks/index-5d7f4c85.js","_app/immutable/modules/pages/_page.js-76ea25a5.js","_app/immutable/chunks/_page-2a81a22e.js","_app/immutable/chunks/control-e7f5239e.js"];
const stylesheets = ["_app/immutable/assets/_page-65c92881.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=2-2a9b9f73.js.map
