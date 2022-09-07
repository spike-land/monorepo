import{a as T}from"./chunk-chunk-OVQTJTND.mjs";import{ok as L}from"./chunk-chunk-DAFMNHWW.mjs";import{j as A}from"./chunk-chunk-UURPA34U.mjs";A();var O=Object.defineProperty,R=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,H=Object.prototype.hasOwnProperty,V=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of E(t))!H.call(e,a)&&a!==r&&O(e,a,{get:()=>t[a],enumerable:!(s=R(t,a))||s.enumerable});return e},W=(e,t,r)=>(P(e,t,"default"),r&&P(r,t,"default")),b=(e,t,r)=>(V(e,typeof t!="symbol"?t+"":t,r),r),i={};W(i,L);var j=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;let e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(i.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){let t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0;o["lib.dom.d.ts"]=!0;o["lib.dom.iterable.d.ts"]=!0;o["lib.es2015.collection.d.ts"]=!0;o["lib.es2015.core.d.ts"]=!0;o["lib.es2015.d.ts"]=!0;o["lib.es2015.generator.d.ts"]=!0;o["lib.es2015.iterable.d.ts"]=!0;o["lib.es2015.promise.d.ts"]=!0;o["lib.es2015.proxy.d.ts"]=!0;o["lib.es2015.reflect.d.ts"]=!0;o["lib.es2015.symbol.d.ts"]=!0;o["lib.es2015.symbol.wellknown.d.ts"]=!0;o["lib.es2016.array.include.d.ts"]=!0;o["lib.es2016.d.ts"]=!0;o["lib.es2016.full.d.ts"]=!0;o["lib.es2017.d.ts"]=!0;o["lib.es2017.full.d.ts"]=!0;o["lib.es2017.intl.d.ts"]=!0;o["lib.es2017.object.d.ts"]=!0;o["lib.es2017.sharedmemory.d.ts"]=!0;o["lib.es2017.string.d.ts"]=!0;o["lib.es2017.typedarrays.d.ts"]=!0;o["lib.es2018.asyncgenerator.d.ts"]=!0;o["lib.es2018.asynciterable.d.ts"]=!0;o["lib.es2018.d.ts"]=!0;o["lib.es2018.full.d.ts"]=!0;o["lib.es2018.intl.d.ts"]=!0;o["lib.es2018.promise.d.ts"]=!0;o["lib.es2018.regexp.d.ts"]=!0;o["lib.es2019.array.d.ts"]=!0;o["lib.es2019.d.ts"]=!0;o["lib.es2019.full.d.ts"]=!0;o["lib.es2019.object.d.ts"]=!0;o["lib.es2019.string.d.ts"]=!0;o["lib.es2019.symbol.d.ts"]=!0;o["lib.es2020.bigint.d.ts"]=!0;o["lib.es2020.d.ts"]=!0;o["lib.es2020.full.d.ts"]=!0;o["lib.es2020.intl.d.ts"]=!0;o["lib.es2020.promise.d.ts"]=!0;o["lib.es2020.sharedmemory.d.ts"]=!0;o["lib.es2020.string.d.ts"]=!0;o["lib.es2020.symbol.wellknown.d.ts"]=!0;o["lib.es2021.d.ts"]=!0;o["lib.es2021.full.d.ts"]=!0;o["lib.es2021.intl.d.ts"]=!0;o["lib.es2021.promise.d.ts"]=!0;o["lib.es2021.string.d.ts"]=!0;o["lib.es2021.weakref.d.ts"]=!0;o["lib.es5.d.ts"]=!0;o["lib.es6.d.ts"]=!0;o["lib.esnext.d.ts"]=!0;o["lib.esnext.full.d.ts"]=!0;o["lib.esnext.intl.d.ts"]=!0;o["lib.esnext.promise.d.ts"]=!0;o["lib.esnext.string.d.ts"]=!0;o["lib.esnext.weakref.d.ts"]=!0;o["lib.scripthost.d.ts"]=!0;o["lib.webworker.d.ts"]=!0;o["lib.webworker.importscripts.d.ts"]=!0;o["lib.webworker.iterable.d.ts"]=!0;function C(e,t,r=0){if(typeof e=="string")return e;if(e===void 0)return"";let s="";if(r){s+=t;for(let a=0;a<r;a++)s+="  "}if(s+=e.messageText,r++,e.next)for(let a of e.next)s+=C(a,t,r);return s}function y(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let r=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:a,column:u}=r,{lineNumber:c,column:g}=s;return{startLineNumber:a,startColumn:u,endLineNumber:c,endColumn:g}}},B=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){let t=i.Uri.parse(e),r=i.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);let s=T.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},U=class extends _{constructor(t,r,s,a){super(a);this._disposables=[];this._listener=Object.create(null);this._libFiles=t,this._defaults=r,this._selector=s;let u=n=>{if(n.getLanguageId()!==s)return;let p=()=>{let{onlyVisible:w}=this._defaults.getDiagnosticsOptions();w?n.isAttachedToEditor()&&this._doValidate(n):this._doValidate(n)},d,f=n.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(p,500)}),h=n.onDidChangeAttached(()=>{let{onlyVisible:w}=this._defaults.getDiagnosticsOptions();w&&(n.isAttachedToEditor()?p():i.editor.setModelMarkers(n,this._selector,[]))});this._listener[n.uri.toString()]={dispose(){f.dispose(),h.dispose(),clearTimeout(d)}},p()},c=n=>{i.editor.setModelMarkers(n,this._selector,[]);let p=n.uri.toString();this._listener[p]&&(this._listener[p].dispose(),delete this._listener[p])};this._disposables.push(i.editor.onDidCreateModel(n=>u(n))),this._disposables.push(i.editor.onWillDisposeModel(c)),this._disposables.push(i.editor.onDidChangeModelLanguage(n=>{c(n.model),u(n.model)})),this._disposables.push({dispose(){for(let n of i.editor.getModels())c(n)}});let g=()=>{for(let n of i.editor.getModels())c(n),u(n)};this._disposables.push(this._defaults.onDidChange(g)),this._disposables.push(this._defaults.onDidExtraLibsChange(g)),i.editor.getModels().forEach(n=>u(n))}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables=[]}async _doValidate(t){let r=await this._worker(t.uri);if(t.isDisposed())return;let s=[],{noSyntaxValidation:a,noSemanticValidation:u,noSuggestionDiagnostics:c}=this._defaults.getDiagnosticsOptions();a||s.push(r.getSyntacticDiagnostics(t.uri.toString())),u||s.push(r.getSemanticDiagnostics(t.uri.toString())),c||s.push(r.getSuggestionDiagnostics(t.uri.toString()));let g=await Promise.all(s);if(!g||t.isDisposed())return;let n=g.reduce((d,f)=>f.concat(d),[]).filter(d=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)===-1),p=n.map(d=>d.relatedInformation||[]).reduce((d,f)=>f.concat(d),[]).map(d=>d.file?i.Uri.parse(d.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(p),!t.isDisposed()&&i.editor.setModelMarkers(t,this._selector,n.map(d=>this._convertDiagnostics(t,d)))}_convertDiagnostics(t,r){let s=r.start||0,a=r.length||1,{lineNumber:u,column:c}=t.getPositionAt(s),{lineNumber:g,column:n}=t.getPositionAt(s+a),p=[];return r.reportsUnnecessary&&p.push(i.MarkerTag.Unnecessary),r.reportsDeprecated&&p.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(r.category),startLineNumber:u,startColumn:c,endLineNumber:g,endColumn:n,message:C(r.messageText,`
`),code:r.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(t,r.relatedInformation)}}_convertRelatedInformation(t,r){if(!r)return[];let s=[];return r.forEach(a=>{let u=t;if(a.file&&(u=this._libFiles.getOrCreateModel(a.file.fileName)),!u)return;let c=a.start||0,g=a.length||1,{lineNumber:n,column:p}=u.getPositionAt(c),{lineNumber:d,column:f}=u.getPositionAt(c+g);s.push({resource:u.uri,startLineNumber:n,startColumn:p,endLineNumber:d,endColumn:f,message:C(a.messageText,`
`)})}),s}_tsDiagnosticCategoryToMarkerSeverity(t){switch(t){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},x=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,r,s){let a=e.getWordUntilPosition(t),u=new i.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),c=e.uri,g=e.getOffsetAt(t),n=await this._worker(c);if(e.isDisposed())return;let p=await n.getCompletionsAtPosition(c.toString(),g);return!p||e.isDisposed()?void 0:{suggestions:p.entries.map(f=>{let h=u;if(f.replacementSpan){let v=e.getPositionAt(f.replacementSpan.start),S=e.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);h=new i.Range(v.lineNumber,v.column,S.lineNumber,S.column)}let w=[];return f.kindModifiers?.indexOf("deprecated")!==-1&&w.push(i.languages.CompletionItemTag.Deprecated),{uri:c,position:t,offset:g,range:h,label:f.name,insertText:f.name,sortText:f.sortText,kind:x.convertKind(f.kind),tags:w}})}}async resolveCompletionItem(e,t){let r=e,s=r.uri,a=r.position,u=r.offset,g=await(await this._worker(s)).getCompletionEntryDetails(s.toString(),u,r.label);return g?{uri:s,position:a,label:g.name,kind:x.convertKind(g.kind),detail:y(g.displayParts),documentation:{value:x.createDocumentationString(g)}}:r}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return i.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return i.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return i.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return i.languages.CompletionItemKind.Function;case l.enum:return i.languages.CompletionItemKind.Enum;case l.module:return i.languages.CompletionItemKind.Module;case l.class:return i.languages.CompletionItemKind.Class;case l.interface:return i.languages.CompletionItemKind.Interface;case l.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=y(e.documentation);if(e.tags)for(let r of e.tags)t+=`

${I(r)}`;return t}};function I(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){let[r,...s]=e.text;t+=`\`${r.text}\``,s.length>0&&(t+=` \u2014 ${s.map(a=>a.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(r=>r.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var N=class extends _{constructor(){super(...arguments);this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,r,s,a){let u=t.uri,c=t.getOffsetAt(r),g=await this._worker(u);if(t.isDisposed())return;let n=await g.getSignatureHelpItems(u.toString(),c,{triggerReason:N._toSignatureHelpTriggerReason(a)});if(!n||t.isDisposed())return;let p={activeSignature:n.selectedItemIndex,activeParameter:n.argumentIndex,signatures:[]};return n.items.forEach(d=>{let f={label:"",parameters:[]};f.documentation={value:y(d.documentation)},f.label+=y(d.prefixDisplayParts),d.parameters.forEach((h,w,v)=>{let S=y(h.displayParts),K={label:S,documentation:{value:y(h.documentation)}};f.label+=S,f.parameters.push(K),w<v.length-1&&(f.label+=y(d.separatorDisplayParts))}),f.label+=y(d.suffixDisplayParts),p.signatures.push(f)}),{value:p,dispose(){}}}},$=class extends _{async provideHover(e,t,r){let s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;let c=await u.getQuickInfoAtPosition(s.toString(),a);if(!c||e.isDisposed())return;let g=y(c.documentation),n=c.tags?c.tags.map(d=>I(d)).join(`  

`):"",p=y(c.displayParts);return{range:this._textSpanToRange(e,c.textSpan),contents:[{value:"```typescript\n"+p+"\n```\n"},{value:g+(n?`

`+n:"")}]}}},z=class extends _{async provideDocumentHighlights(e,t,r){let s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;let c=await u.getOccurrencesAtPosition(s.toString(),a);if(!(!c||e.isDisposed()))return c.map(g=>({range:this._textSpanToRange(e,g.textSpan),kind:g.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))}},G=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,r){let s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;let c=await u.getDefinitionAtPosition(s.toString(),a);if(!c||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(c.map(n=>i.Uri.parse(n.fileName))),e.isDisposed()))return;let g=[];for(let n of c){let p=this._libFiles.getOrCreateModel(n.fileName);p&&g.push({uri:p.uri,range:this._textSpanToRange(p,n.textSpan)})}return g}},J=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,r,s){let a=e.uri,u=e.getOffsetAt(t),c=await this._worker(a);if(e.isDisposed())return;let g=await c.getReferencesAtPosition(a.toString(),u);if(!g||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(g.map(p=>i.Uri.parse(p.fileName))),e.isDisposed()))return;let n=[];for(let p of g){let d=this._libFiles.getOrCreateModel(p.fileName);d&&n.push({uri:d.uri,range:this._textSpanToRange(d,p.textSpan)})}return n}},Q=class extends _{async provideDocumentSymbols(e,t){let r=e.uri,s=await this._worker(r);if(e.isDisposed())return;let a=await s.getNavigationBarItems(r.toString());if(!a||e.isDisposed())return;let u=(g,n,p)=>{let d={name:n.text,detail:"",kind:m[n.kind]||i.languages.SymbolKind.Variable,range:this._textSpanToRange(e,n.spans[0]),selectionRange:this._textSpanToRange(e,n.spans[0]),tags:[]};if(p&&(d.containerName=p),n.childItems&&n.childItems.length>0)for(let f of n.childItems)u(g,f,d.name);g.push(d)},c=[];return a.forEach(g=>u(c,g)),c}},l=class{};b(l,"unknown","");b(l,"keyword","keyword");b(l,"script","script");b(l,"module","module");b(l,"class","class");b(l,"interface","interface");b(l,"type","type");b(l,"enum","enum");b(l,"variable","var");b(l,"localVariable","local var");b(l,"function","function");b(l,"localFunction","local function");b(l,"memberFunction","method");b(l,"memberGetAccessor","getter");b(l,"memberSetAccessor","setter");b(l,"memberVariable","property");b(l,"constructorImplementation","constructor");b(l,"callSignature","call");b(l,"indexSignature","index");b(l,"constructSignature","construct");b(l,"parameter","parameter");b(l,"typeParameter","type parameter");b(l,"primitiveType","primitive type");b(l,"label","label");b(l,"alias","alias");b(l,"const","const");b(l,"let","let");b(l,"warning","warning");var m=Object.create(null);m[l.module]=i.languages.SymbolKind.Module;m[l.class]=i.languages.SymbolKind.Class;m[l.enum]=i.languages.SymbolKind.Enum;m[l.interface]=i.languages.SymbolKind.Interface;m[l.memberFunction]=i.languages.SymbolKind.Method;m[l.memberVariable]=i.languages.SymbolKind.Property;m[l.memberGetAccessor]=i.languages.SymbolKind.Property;m[l.memberSetAccessor]=i.languages.SymbolKind.Property;m[l.variable]=i.languages.SymbolKind.Variable;m[l.const]=i.languages.SymbolKind.Variable;m[l.localVariable]=i.languages.SymbolKind.Variable;m[l.variable]=i.languages.SymbolKind.Variable;m[l.function]=i.languages.SymbolKind.Function;m[l.localFunction]=i.languages.SymbolKind.Function;var k=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},q=class extends k{async provideDocumentRangeFormattingEdits(e,t,r,s){let a=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(a);if(e.isDisposed())return;let n=await g.getFormattingEditsForRange(a.toString(),u,c,k._convertOptions(r));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},X=class extends k{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,r,s,a){let u=e.uri,c=e.getOffsetAt(t),g=await this._worker(u);if(e.isDisposed())return;let n=await g.getFormattingEditsAfterKeystroke(u.toString(),c,r,k._convertOptions(s));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},Y=class extends k{async provideCodeActions(e,t,r,s){let a=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=k._convertOptions(e.getOptions()),n=r.markers.filter(h=>h.code).map(h=>h.code).map(Number),p=await this._worker(a);if(e.isDisposed())return;let d=await p.getCodeFixesAtPosition(a.toString(),u,c,n,g);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter(h=>h.changes.filter(w=>w.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,r,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,r){let s=[];for(let u of r.changes)for(let c of u.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,c.span),text:c.newText}});return{title:r.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},Z=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,r,s){let a=e.uri,u=a.toString(),c=e.getOffsetAt(t),g=await this._worker(a);if(e.isDisposed())return;let n=await g.getRenameInfo(u,c,{allowRenameOfImportPath:!1});if(n.canRename===!1)return{edits:[],rejectReason:n.localizedErrorMessage};if(n.fileToRename!==void 0)throw new Error("Renaming files is not supported.");let p=await g.findRenameLocations(u,c,!1,!1,!1);if(!p||e.isDisposed())return;let d=[];for(let f of p){let h=this._libFiles.getOrCreateModel(f.fileName);if(h)d.push({resource:h.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(h,f.textSpan),text:r}});else throw new Error(`Unknown file ${f.fileName}.`)}return{edits:d}}},ee=class extends _{async provideInlayHints(e,t,r){let s=e.uri,a=s.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(s);return e.isDisposed()?null:{hints:(await g.provideInlayHints(a,u,c)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Type}}},D,F;function se(e){F=M(e,"typescript")}function ie(e){D=M(e,"javascript")}function ne(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})}function ae(){return new Promise((e,t)=>{if(!F)return t("TypeScript not registered!");e(F)})}function M(e,t){let r=new j(t,e),s=(...u)=>r.getLanguageServiceWorker(...u),a=new B(s);return i.languages.registerCompletionItemProvider(t,new x(s)),i.languages.registerSignatureHelpProvider(t,new N(s)),i.languages.registerHoverProvider(t,new $(s)),i.languages.registerDocumentHighlightProvider(t,new z(s)),i.languages.registerDefinitionProvider(t,new G(a,s)),i.languages.registerReferenceProvider(t,new J(a,s)),i.languages.registerDocumentSymbolProvider(t,new Q(s)),i.languages.registerDocumentRangeFormattingEditProvider(t,new q(s)),i.languages.registerOnTypeFormattingEditProvider(t,new X(s)),i.languages.registerCodeActionProvider(t,new Y(s)),i.languages.registerRenameProvider(t,new Z(a,s)),i.languages.registerInlayHintsProvider(t,new ee(s)),new U(a,e,t,s),s}export{_ as Adapter,Y as CodeActionAdaptor,G as DefinitionAdapter,U as DiagnosticsAdapter,q as FormatAdapter,k as FormatHelper,X as FormatOnTypeAdapter,ee as InlayHintsAdapter,l as Kind,B as LibFiles,z as OccurrencesAdapter,Q as OutlineAdapter,$ as QuickInfoAdapter,J as ReferenceAdapter,Z as RenameAdapter,N as SignatureHelpAdapter,x as SuggestAdapter,j as WorkerManager,C as flattenDiagnosticMessageText,ne as getJavaScriptWorker,ae as getTypeScriptWorker,ie as setupJavaScript,se as setupTypeScript};
