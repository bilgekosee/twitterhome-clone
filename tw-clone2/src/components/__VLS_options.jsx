export default (await import('vue')).defineComponent({
props: ["tweet"],
});
const __VLS_options = {
...({
props: ["tweet"],
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
props: ["tweet"],
} as const);
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
declare const RouterLink: __VLS_types.ConvertInvalidJsxElement<
'router-link' extends keyof typeof __VLS_components ? typeof __VLS_components['router-link'] : 'routerLink' extends keyof typeof __VLS_components ? typeof __VLS_components['routerLink'] : 'RouterLink' extends keyof typeof __VLS_components ? typeof __VLS_components['RouterLink'] : 'router-link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['router-link'] : 'routerLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['routerLink'] : 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['RouterLink'] : unknown>;
__VLS_components['router-link']; __VLS_components.routerLink; __VLS_components.RouterLink;
__VLS_components['router-link']; __VLS_components.routerLink; __VLS_components.RouterLink;
__VLS_ctx['router-link']; __VLS_ctx.routerLink; __VLS_ctx.RouterLink;
__VLS_ctx['router-link']; __VLS_ctx.routerLink; __VLS_ctx.RouterLink;
declare const __VLS_0: __VLS_types.ExtractEmit2<typeof RouterLink>;
/* Completion: Emits */
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.router-link */');
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.routerLink */');
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.RouterLink */');
/* Completion: Props */
// @ts-ignore
(<RouterLink /* __VLS_.SearchTexts.Completion.Props.router-link */ />);
// @ts-ignore
(<RouterLink /* __VLS_.SearchTexts.Completion.Props.routerLink */ />);
// @ts-ignore
(<RouterLink /* __VLS_.SearchTexts.Completion.Props.RouterLink */ />);
{
<article class={"\u0074\u0077\u0065\u0065\u0074\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030"}></article>;

{
<RouterLink to={"\u0023"} class={"\u0066\u006c\u0065\u0078\u0020\u0070\u002d\u0034"}></RouterLink>;

{
<figure class={"\u0077\u002d\u0031\u0036\u0020\u006d\u0072\u002d\u0033"}></figure>;

{
<img src={(__VLS_ctx.tweet.author.profile_img_url)} alt={"\u0049\u006d\u0061\u0067\u0065"} class={"\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0077\u002d\u0066\u0075\u006c\u006c"} />;
[tweet,];
}
}
{
<section class={"\u0066\u006c\u0065\u0078\u002d\u0031"}></section>;

{
<div></div>;

{
<span class={"\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064"}></span>;

(__VLS_ctx.tweet.author.display_name);
[tweet,];
}
{
<span class={"\u0074\u0065\u0078\u0074\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u006d\u006c\u002d\u0032\u0020\u0066\u006f\u006e\u0074\u002d\u006e\u006f\u0072\u006d\u0061\u006c"}></span>;

(__VLS_ctx.tweet.author.username);
[tweet,];
}
}
{
<div class={(__VLS_ctx.tweet.image ? 'mb-3' : '')}></div>;

[tweet,];
{
<p class={"\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065"}></p>;

__VLS_types.directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.tweet.body));
[tweet,];
}
}
if (__VLS_ctx.tweet.image) {
[tweet,];
{
<figure class={"\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0078\u006c\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077\u002d\u0068\u0069\u0064\u0064\u0065\u006e"}></figure>;

{
<img src={(__VLS_ctx.tweet.image.url)} alt={(__VLS_ctx.tweet.image.alt)} class={"\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u0068\u002d\u0034\u0034\u0020\u006f\u0062\u006a\u0065\u0063\u0074\u002d\u0063\u006f\u0076\u0065\u0072"} />;
[tweet, tweet,];
}
}
}
{
<div class={"\u006d\u0074\u002d\u0032\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e"}></div>;

{
<div class={"\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030"}></div>;

{
<i class={"\u0066\u0061\u0073\u0020\u0066\u0061\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0020\u0070\u002d\u0032\u0020\u006d\u0072\u002d\u0031\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0065\u0078\u0074\u002d\u0072\u0065\u0064\u002d\u0035\u0030\u0030"}></i>;

}
{
<span></span>;

(__VLS_ctx.tweet.stats.comments.length);
[tweet,];
}
}
}
{
<div class={"\u006d\u0074\u002d\u0032\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e"}></div>;

{
<div class={"\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030"}></div>;

{
<i class={"\u0066\u0061\u0073\u0020\u0066\u0061\u002d\u0072\u0065\u0074\u0077\u0065\u0065\u0074\u0020\u0070\u002d\u0032\u0020\u006d\u0072\u002d\u0031\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0065\u0078\u0074\u002d\u0072\u0065\u0064\u002d\u0035\u0030\u0030"}></i>;

}
{
<span></span>;

(__VLS_ctx.tweet.stats.retweets.length);
[tweet,];
}
}
}
{
<div class={"\u006d\u0074\u002d\u0032\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e"}></div>;

{
<div class={"\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030"}></div>;

{
<i class={"\u0066\u0061\u0073\u0020\u0066\u0061\u002d\u0068\u0065\u0061\u0072\u0074\u0020\u0070\u002d\u0032\u0020\u006d\u0072\u002d\u0031\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0065\u0078\u0074\u002d\u0072\u0065\u0064\u002d\u0035\u0030\u0030"}></i>;

}
{
<span></span>;

(__VLS_ctx.tweet.stats.likes.length);
[tweet,];
}
}
}
{
<div class={"\u006d\u0074\u002d\u0032\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e"}></div>;

{
<div class={"\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030"}></div>;

{
<i class={"\u0066\u0061\u0073\u0020\u0066\u0061\u002d\u0073\u0068\u0061\u0072\u0065\u0020\u0070\u002d\u0032\u0020\u006d\u0072\u002d\u0031\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0072\u0065\u0064\u002d\u0039\u0030\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0065\u0078\u0074\u002d\u0072\u0065\u0064\u002d\u0035\u0030\u0030"}></i>;

}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./Tweet.vue')['default'];
