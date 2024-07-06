import { j as Fragment, a8 as __astro_tag_component__, a7 as createVNode } from './astro_CEBKy5ee.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as $$Picture } from './pages/node_CTRDpcbs.mjs';
import 'clsx';

const work = new Proxy({"src":"/_astro/work.CM2PyxkA.png","width":1352,"height":1031,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/blogAssets/poczatek/work.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Pierwsze koty za płoty",
  "date": "2023-11-26T00:00:00.000Z",
  "author": "Tomasz 'GromoTJ' Jankiewicz",
  "cover": {
    "img": "./blogAssets/poczatek/obietnica.png",
    "alt": "TEST TEST TEST"
  },
  "description": "To zabawne, że niektóre rzeczy powstają tak późno",
  "category": "Za kulisami"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "no-to-zaczynamy",
    "text": "No to zaczynamy"
  }, {
    "depth": 1,
    "slug": "początki-bywają-skromne",
    "text": "Początki bywają skromne…"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "no-to-zaczynamy",
      children: "No to zaczynamy"
    }), "\n", createVNode(_components.p, {
      children: "Tak oto startuje projekt, który powinien uratować każdy kolejny od niechybnej zgóby…"
    }), "\n", createVNode(_components.p, {
      children: "Do tej pory większość rzeczy za jakie się brałem kończyło sówj żywot gdzieś zaraz na pierwszym mniej lub bardziej poważnym problemie. Przyszedł czas na to aby coś z tym zrobić."
    }), "\n", createVNode(_components.p, {
      children: "Pierwszy post chyba musi być okropnie napisany, więc raczej nie powinienem się przejmować paskudztwami jakie zostaną tu zapisane…"
    }), "\n", createVNode(_components.p, {
      children: ["Na sam początek warto będzie opisać dokłanie jaki jest powód stworzenia tego ", createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "“Prywatnego fragmentu internetu”"
        })
      }), ". Jak juz do tej pory napisano większośc rzeczy jakoś nie jest w stanie się w pełni ziścić kiedy maczam w nich swoje ręce. Ten obecny projekt, który przy dobrych wiatrach nie zostanie pożucony po jednym tygodniu… ma na celu pobudzać motywacje do działania i udowadniania, że wszystko jest możliwe o ile uda się utrzymać właściwy kurs."]
    }), "\n", createVNode($$Picture, {
      src: work,
      alt: "XD",
      pictureAttributes: {
        style: "height:auto !important"
      }
    }), "\n", createVNode(_components.h1, {
      id: "początki-bywają-skromne",
      children: "Początki bywają skromne…"
    }), "\n", createVNode(_components.p, {
      children: "Od ponad roku staram się stworzyć coś co mogło by reprezentować ilość energii jaką staram się wkładać w swój rozwój. Pomimo dość długiego czasu poświęconemu na naukę nigdy nie byłem w stanie przekuć to w coś praktycznego. A to właśnie przez ciagłą praktykę zdobywa się najwięcej dośwadczenia, które jest dziś na wagę złota. A ta strona ma w tym pomóc. Przy dobrych wiatrach możę okazać się pomocna rownież dla moich przyjaciół i znajomych w realizowaniu ich pasji."
    }), "\n", createVNode(_components.p, {
      children: ["Sam blog powstał za sprawą tutoriala od ", createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "Coding in Public"
        })
      }), " ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=6XzyobQYQVQ",
        children: "Astro Blog Course - Full 3.5 hour course"
      }), ". Wraz z paroma innymi filmami pokazującymi wykorzystanie nowości w Astro 3.0"]
    }), "\n", createVNode(_components.p, {
      children: "Na dzień dzisiejszy strona nie różni się zbytnio od tej zaprezentowanej na filmie. Ale z czasem zostaną wprowadzone zmiany z wyglądem i kompozycją stron. Przewiduje dodanie paru interkatywnych komponentów o których na ten moment nie ma co pisać. Przynajmniej do puki nie będą choć częściowo dopracowane na papierze."
    }), "\n", createVNode(_components.p, {
      children: "Do tej pory postaram się poprawić swoje zdolności literackie."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/poczatek.mdx";
const file = "C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
