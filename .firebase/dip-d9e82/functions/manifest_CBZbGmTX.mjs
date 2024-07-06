import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_CEBKy5ee.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/test.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test.json.ts","pathname":"/api/test.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"programs/bingo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/programs/bingo","isIndex":false,"type":"page","pattern":"^\\/programs\\/bingo\\/?$","segments":[[{"content":"programs","dynamic":false,"spread":false}],[{"content":"bingo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programs/bingo.astro","pathname":"/programs/bingo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"programs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/programs","isIndex":true,"type":"page","pattern":"^\\/programs\\/?$","segments":[[{"content":"programs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programs/index.astro","pathname":"/programs","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/category/[category].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/programs/bingo.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/pages/programs/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/components/CategoryCloud.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/category/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CBZbGmTX.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/actions/index.ts":"chunks/index_Cw0TebSz.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"chunks/route_sd586ebo.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_B74IJQnX.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DlsO9zhu.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CsPZ6YGE.mjs","\u0000@astro-page:src/pages/api/test.json@_@ts":"chunks/test_CHWQmL3D.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__944DTxKa.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._BkYUOZ-6.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"chunks/_category__DpP7dD4H.mjs","\u0000@astro-page:src/pages/programs/bingo@_@astro":"chunks/bingo_CwPzAvNr.mjs","\u0000@astro-page:src/pages/programs/index@_@astro":"chunks/index_D2twcr1L.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_HTFgPiUc.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/diy2023.mdx?astroContentCollectionEntry=true":"chunks/diy2023_CPIdokyr.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx?astroContentCollectionEntry=true":"chunks/poczatek_B9kqTM_G.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/diy2023.mdx?astroPropagatedAssets":"chunks/diy2023_CGnhTNXs.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx?astroPropagatedAssets":"chunks/poczatek_BlFlMqLr.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/diy2023.mdx":"chunks/diy2023_DDfDXxsq.mjs","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/content/blog/poczatek.mdx":"chunks/poczatek_Bka7Yael.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DO9WKhhS.js","C:/Users/Tomasz/Desktop/astroSSR/strefa_gromu/src/components/BingoGame":"_astro/BingoGame.kk28AOCJ.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/strefa_gromu_hero.BTtlnYAP.png","/_astro/ToMaszCoMasz_Logo.x14ChVYU.png","/_astro/obietnica.vp-SDkoK.png","/_astro/cover.DIIcCN1h.jpg","/_astro/work.CM2PyxkA.png","/_astro/bird_feeder.Tg8Zdfd0.jpg","/_astro/ubox_2.03-3uPYY.jpg","/_astro/sb1_3.tY-MjxDa.jpg","/_astro/bird_house_3.FW3tirJG.jpg","/_astro/table_leg.C_0XTHb3.jpg","/_astro/bird_house_2.BZ294RhM.jpg","/_astro/bird_house_1.DbPXcbES.jpg","/_astro/sb1_2.BGdaDCr7.jpg","/_astro/lf_1.BQVQ5n3m.jpg","/_astro/sb1_1.DvkDkDq6.jpg","/_astro/lf_2.VR1c--Yw.jpg","/_astro/ubox_1.BObGfTE0.jpg","/_astro/sb2_1.6yDkuq5Y.jpg","/_astro/table.BEjspEf3.jpg","/_astro/ubox_3.hi9OuS1X.jpg","/_astro/about.gYJ3p1fA.css","/banner.png","/favicon.svg","/images/banner.png","/images/obietnica.png","/images/strefa_gromu_hero.png","/images/work.png","/_astro/BingoGame.kk28AOCJ.js","/_astro/client.BIGLHmRd.js","/_astro/index.DhYZZe0J.js","/404.html","/about/index.html","/api/test.json","/programs/bingo/index.html","/programs/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
