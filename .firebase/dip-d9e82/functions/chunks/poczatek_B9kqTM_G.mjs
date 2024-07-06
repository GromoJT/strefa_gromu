const id = "poczatek.mdx";
						const collection = "blog";
						const slug = "poczatek";
						const body = "import { Picture} from \"astro:assets\";\nimport work from './blogAssets/poczatek/work.png'\n\n## No to zaczynamy \nTak oto startuje projekt, który powinien uratować każdy kolejny od niechybnej zgóby...\n\nDo tej pory większość rzeczy za jakie się brałem kończyło sówj żywot gdzieś zaraz na pierwszym mniej lub bardziej poważnym problemie. Przyszedł czas na to aby coś z tym zrobić.\n\nPierwszy post chyba musi być okropnie napisany, więc raczej nie powinienem się przejmować paskudztwami jakie zostaną tu zapisane...\n\nNa sam początek warto będzie opisać dokłanie jaki jest powód stworzenia tego ***\"Prywatnego fragmentu internetu\"***. Jak juz do tej pory napisano większośc rzeczy jakoś nie jest w stanie się w pełni ziścić kiedy maczam w nich swoje ręce. Ten obecny projekt, który przy dobrych wiatrach nie zostanie pożucony po jednym tygodniu... ma na celu pobudzać motywacje do działania i udowadniania, że wszystko jest możliwe o ile uda się utrzymać właściwy kurs. \n\n<Picture\n  src={work}\n  alt={\"XD\"}\n  pictureAttributes={{ style: \"height:auto !important\" }}\n/>\n\n# Początki bywają skromne...\n\nOd ponad roku staram się stworzyć coś co mogło by reprezentować ilość energii jaką staram się wkładać w swój rozwój. Pomimo dość długiego czasu poświęconemu na naukę nigdy nie byłem w stanie przekuć to w coś praktycznego. A to właśnie przez ciagłą praktykę zdobywa się najwięcej dośwadczenia, które jest dziś na wagę złota. A ta strona ma w tym pomóc. Przy dobrych wiatrach możę okazać się pomocna rownież dla moich przyjaciół i znajomych w realizowaniu ich pasji.\n\nSam blog powstał za sprawą tutoriala od ***Coding in Public*** [Astro Blog Course - Full 3.5 hour course](https://www.youtube.com/watch?v=6XzyobQYQVQ). Wraz z paroma innymi filmami pokazującymi wykorzystanie nowości w Astro 3.0\n\nNa dzień dzisiejszy strona nie różni się zbytnio od tej zaprezentowanej na filmie. Ale z czasem zostaną wprowadzone zmiany z wyglądem i kompozycją stron. Przewiduje dodanie paru interkatywnych komponentów o których na ten moment nie ma co pisać. Przynajmniej do puki nie będą choć częściowo dopracowane na papierze.\n\nDo tej pory postaram się poprawić swoje zdolności literackie.\n";
						const data = {title:"Pierwsze koty za płoty",date:new Date(1700956800000),author:"Tomasz 'GromoTJ' Jankiewicz",cover:{img:
						new Proxy({"src":"/_astro/obietnica.vp-SDkoK.png","width":1200,"height":600,"format":"png","fsPath":"C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/blogAssets/poczatek/obietnica.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/blogAssets/poczatek/obietnica.png";
							}
							
							return target[name];
						}
					})
					,alt:"TEST TEST TEST"},description:"To zabawne, że niektóre rzeczy powstają tak późno",draft:false,category:"Za kulisami"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
