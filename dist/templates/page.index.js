this["S"] = this["S"] || {};
this["S"]["templates"] = this["S"]["templates"] || {};
this["S"]["templates"]["page"] = this["S"]["templates"]["page"] || {};
this["S"]["templates"]["page"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "This is "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + " !";
},"useData":true});