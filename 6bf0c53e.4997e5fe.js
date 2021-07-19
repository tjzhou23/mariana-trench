(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{84:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return l}));var t=n(3),r=n(7),o=(n(0),n(105)),i={id:"running-on-3rd-party-apps",title:"Running on 3rd-Party Apps",sidebar_label:"Running on 3rd-Party Apps"},s={unversionedId:"running-on-3rd-party-apps",id:"running-on-3rd-party-apps",isDocsHomePage:!1,title:"Running on 3rd-Party Apps",description:"This guide will walk you through the process to run Mariana Trench on 3rd party apps. We often use Mariana Trench to analyze our own applications where we have the source code readily available but Mariana Trench runs on byte-code and does not necessarily need access to source code.",source:"@site/documentation/running_on_3rd_party_apps.md",slug:"/running-on-3rd-party-apps",permalink:"/docs/running-on-3rd-party-apps",editUrl:"https://www.internalfb.com/intern/diffusion/FBS/browse/master/fbandroid/native/mariana-trench/documentation/website/documentation/running_on_3rd_party_apps.md",version:"current",sidebar_label:"Running on 3rd-Party Apps",sidebar:"someSidebar",previous:{title:"Models",permalink:"/docs/models"},next:{title:"Developer's Guide",permalink:"/docs/developers-guide"}},c=[{value:"Getting the APK",id:"getting-the-apk",children:[]},{value:"Decompile the APK",id:"decompile-the-apk",children:[]},{value:"Run Mariana Trench",id:"run-mariana-trench",children:[]}],p={toc:c};function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will walk you through the process to run Mariana Trench on 3rd party apps. We often use Mariana Trench to analyze our own applications where we have the source code readily available but Mariana Trench runs on byte-code and does not necessarily need access to source code."),Object(o.b)("p",null,"This guide assumes you are familiar with running Mariana Trench. If you are not, read the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"getting-started"}),"Getting Started")," guide first."),Object(o.b)("h2",{id:"getting-the-apk"},"Getting the APK"),Object(o.b)("p",null,"You need an APK first in order to analyze it. You can get this directly from your phone or use a site such as ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.apkmirror.com/"}),"apkmirror"),". The rest of this guide assumes that you have downloaded ",Object(o.b)("inlineCode",{parentName:"p"},"example.apk"),"."),Object(o.b)("h2",{id:"decompile-the-apk"},"Decompile the APK"),Object(o.b)("p",null,"While Mariana Trench does not require the source for the analysis, the results are hard to process without any source reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"$ brew install jadx\n$ jadx -e example.apk\n")),Object(o.b)("p",null,"The latter will attempt to decompile the apk and store the results in a ",Object(o.b)("inlineCode",{parentName:"p"},"example/")," directory."),Object(o.b)("h2",{id:"run-mariana-trench"},"Run Mariana Trench"),Object(o.b)("p",null,"We are now ready to run the analysis:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"$ mariana-trench --apk-path=example.apk --source-root-directory=example/src/main/java/\n")),Object(o.b)("p",null,"Once the analysis terminates we can do our usual post-processing and look at the results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell"}),"$ sapp --tool=mariana-trench analyze .\n$ sapp --database-name=sapp.db server --source-directory=example/src/main/java/\n")),Object(o.b)("p",null,"The major limitation of this current approach is that the location information Mariana Trench uses is coming from bytecode instructions, not from the source that we decompiled. This means going through the traces is extra tedious. We welcome suggestions or pull-requests to improve this process."))}l.isMDXComponent=!0}}]);