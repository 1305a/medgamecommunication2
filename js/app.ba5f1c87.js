(function(){var t={987:function(t,e,a){"use strict";var o=a(144),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.actualState.hideChat?t._e():e("ViewChat",{attrs:{chatList:t.chatList,actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers,qualityReception:t.qualityReception,doctorComfort:t.doctorComfort},on:{pushmessage:function(e){return t.pushToChatList()},action:function(e){return t.doAction(e)},actionanswer:function(e){return t.doAction(e)},deleteanswer:function(e){return t.deleteanswer(e)}}}),t.showModal?e("InfoModal",{attrs:{modalInfo:t.modalInfo,qualityReception:t.qualityReception,doctorComfort:t.doctorComfort},on:{action:function(e){return t.doAction(e)}}}):t._e(),t.showModalChoice?e("ModalChoice",{attrs:{modalInfo:t.modalInfo,qualityReception:t.qualityReception,doctorComfort:t.doctorComfort},on:{action:function(e){return t.doAction(e)}}}):t._e(),"finalProgress"===t.actualState.type?e("NewFinalProgress",{attrs:{actualStateData:t.actualState.data,qualityReception:t.qualityReception,doctorComfort:t.doctorComfort},on:{action:function(e){return t.doAction(e)}}}):t._e()],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal modal-disclaimer",staticStyle:{display:"flex"}},[t.modalInfo.head?e("InfoHead",{attrs:{head:t.modalInfo.head}}):t._e(),t.modalInfo.body?e("InfoBody",{attrs:{body:t.modalInfo.body}}):t._e(),t.modalInfo.choicePatient?e("ChoicePatient",{attrs:{patientList:t.modalInfo.choicePatient},on:{action:function(e){return t.buttonAction(e)}}}):t._e(),t.modalInfo.progress?e("FinalProgress",{attrs:{qualityReception:t.qualityReception,doctorComfort:t.doctorComfort}}):t._e(),t.modalInfo.btnList?e("div",{staticClass:"modal_body modal-btn-list"},[e("ButtonList",{attrs:{btnList:t.modalInfo.btnList},on:{action:function(e){return t.buttonAction(e)}}})],1):t._e(),t.modalInfo.body2?e("InfoBody",{attrs:{body:t.modalInfo.body2}}):t._e(),t.modalInfo.footer?e("InfoFooter",{class:t.addClass,attrs:{footerData:t.modalInfo.footer},on:{action:function(e){return t.buttonAction(e)}}}):t._e()],1)},r=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_header"},[t._v(" "+t._s(t.head)+" ")])},l=[],d={props:{head:String}},u=d,p=a(1),h=(0,p.Z)(u,c,l,!1,null,null,null),f=h.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_body",domProps:{innerHTML:t._s(t.body)}})},y=[],b={props:{body:String}},g=b,C=(0,p.Z)(g,m,y,!1,null,null,null),w=C.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_footer"},[t.footerData.checkbox?e("InfoCheckbox",{attrs:{checkboxText:t.footerData.checkboxText},on:{changecheckbox:function(e){return t.changecheckbox(e)}}}):t._e(),t._l(t.footerData.btnData,(function(a,o){return e("InfoButton",{key:o,attrs:{btnDataItem:a,isDisabled:t.isDisabled},on:{action:function(e){return t.buttonAction(e)}}})}))],2)},_=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"accept"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"accept",type:"checkbox",name:"ok"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:[function(e){var a=t.checked,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&(t.checked=a.concat([i])):n>-1&&(t.checked=a.slice(0,n).concat(a.slice(n+1)))}else t.checked=s},t.changeCheckbox]}}),e("label",{attrs:{for:"accept"}},[t._v(t._s(t.checkboxText))])])},k=[],D={data(){return{checked:!1}},props:{checkboxText:String},methods:{changeCheckbox(){this.$emit("changecheckbox",this.checked)}},mounted(){this.changeCheckbox()}},I=D,A=(0,p.Z)(I,x,k,!1,null,null,null),S=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{class:t.choiceDiv},[e("button",{class:t.choiceButton,attrs:{disabled:t.isDisabled},on:{click:t.buttonAction}},[t._v(t._s(t.btnDataItem.name))])])},Q=[],P={props:{btnDataItem:{},isDisabled:Boolean},methods:{buttonAction(){this.$emit("action",this.btnDataItem.action)}},computed:{choiceDiv(){return"choice"===this.btnDataItem.class?"choice-div":""},choiceButton(){return"choice"===this.btnDataItem.class?"choice-button":""}},mounted(){}},N=P,L=(0,p.Z)(N,M,Q,!1,null,null,null),q=L.exports,R={data(){return{isDisabled:!1}},components:{InfoCheckbox:S,InfoButton:q},props:{footerData:{}},methods:{buttonAction(t){this.$emit("action",t)},changecheckbox(t){this.isDisabled=!t}}},T=R,j=(0,p.Z)(T,v,_,!1,null,null,null),$=j.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-list"},t._l(t.btnList,(function(a,o){return e("span",{key:o,on:{click:function(e){return t.buttonAction(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0)},B=[],O={props:{btnList:[]},methods:{buttonAction(t){this.$emit("action",t.action)}}},H=O,F=(0,p.Z)(H,Z,B,!1,null,null,null),E=F.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"choice-patient"},t._l(t.patientList,(function(a,o){return e("div",{key:o,staticClass:"patient-card",on:{click:function(e){return t.buttonAction(a)}}},[e("div",{staticClass:"modal_header patient-head"},[t._v(" "+t._s(a.head)+" ")]),e("div",[e("img",{attrs:{src:t.getImage(o),alt:"choice patient"}})]),e("div",{staticClass:"patient-text"},[t._v(" "+t._s(a.text)+" ")])])})),0)},U=[],V={props:{patientList:[]},methods:{getImage(t){return a(990)(`./${this.patientList[t].image}`)},buttonAction(t){this.$emit("action",t.action)}}},J=V,W=(0,p.Z)(J,G,U,!1,null,null,null),z=W.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"final-progress"},[e("div",{staticClass:"final-progress-item left-item"},[t._m(0),e("div",{staticClass:"final-progress-name-line"},[e("div",{staticClass:"final-progress-name"},[t._v("Качество приема")]),e("progress",{staticClass:"final-progress-line",attrs:{max:"100"},domProps:{value:t.qualityReception}})])]),e("div",{staticClass:"final-progress-item right-item"},[t._m(1),e("div",{staticClass:"final-progress-name-line"},[e("div",{staticClass:"final-progress-name"},[t._v("Комфорт врача")]),e("progress",{staticClass:"final-progress-line",attrs:{max:"100"},domProps:{value:t.doctorComfort}})])])])},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"final-image-block"},[e("img",{attrs:{src:a(714)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"final-image-block"},[e("img",{attrs:{src:a(17)}})])}],Y={props:{qualityReception:Number,doctorComfort:Number}},tt=Y,et=(0,p.Z)(tt,K,X,!1,null,null,null),at=et.exports,ot={components:{InfoHead:f,InfoBody:w,InfoFooter:$,ButtonList:E,ChoicePatient:z,FinalProgress:at},props:{modalInfo:{},qualityReception:Number,doctorComfort:Number},computed:{addClass(){return this.modalInfo.footer.class}},methods:{buttonAction(t){this.$emit("action",t)}}},st=ot,it=(0,p.Z)(st,n,r,!1,null,null,null),nt=it.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-choice"},[t.modalInfo.head?e("div",{staticClass:"modal-choice-header"},[t._v(" "+t._s(t.modalInfo.head)+" ")]):t._e(),t.modalInfo.body?e("div",{staticClass:"modal-choice-body",domProps:{innerHTML:t._s(t.modalInfo.body)}}):t._e(),t.modalInfo.footer?e("div",{staticClass:"modal-choice-footer"},t._l(t.modalInfo.footer.btnData,(function(a,o){return e("div",{key:o,staticClass:"modal-choice-button",on:{click:function(e){return t.buttonAction(a.action)}}},[e("div",{staticClass:"modal-choice-button-text"},[t._v(t._s(a.name))])])})),0):t._e()])},ct=[],lt={props:{modalInfo:{},qualityReception:Number,doctorComfort:Number},methods:{buttonAction(t){this.$emit("action",t)}}},dt=lt,ut=(0,p.Z)(dt,rt,ct,!1,null,null,null),pt=ut.exports,ht=function(){var t=this,e=t._self._c;return!1!==t.actualState.showChat?e("div",{staticClass:"content"},[e("div",{staticClass:"chart-wrapper"},[e("NewTopProgress",{attrs:{qualityReception:t.qualityReception,doctorComfort:t.doctorComfort}}),e("div",{ref:"chartbox",staticClass:"chart box"},[t._l(t.chatList,(function(a,o){return e("ChatMessage",{key:o,attrs:{message:t.chatList[o]},on:{scrolldown:t.scrollDown}})})),t.actualState.data.chatImage?e("ImageModal",{attrs:{chatImage:t.actualState.data.chatImage}}):t._e()],2)],1),t.actualState.hideChatQuestions?t._e():e("ChatQuestions",{attrs:{actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers},on:{actionanswer:function(e){return t.actionAnswer(e)},deleteanswer:function(e){return t.deleteAnswer(e)}}})],1):t._e()},ft=[],mt=function(){var t=this,e=t._self._c;return t.message.isDoctor?e("div",{ref:"answerDoctor",staticClass:"medic"},[e("div",{staticClass:"dialog-arrow"})]):e("div",{ref:"answerPatient",staticClass:"patient"},[e("div",{staticClass:"dialog-arrow"})])},yt=[],bt={props:{message:{}},mounted(){async function t(t,e,o){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500)}async function e(t,e,o){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500)}function a(t){return new Promise((e=>setTimeout(e,t)))}this.message.isDoctor&&t(this.$refs.answerDoctor,this.message.text,this),this.message.isDoctor||e(this.$refs.answerPatient,this.message.text,this)}},gt=bt,Ct=(0,p.Z)(gt,mt,yt,!1,null,null,null),wt=Ct.exports,vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions box",staticStyle:{display:"flex"}},[t._m(0),"answer"===t.actualState.type?e("div",{staticClass:"body"},t._l(t.answers,(function(a,o){return e("div",{key:o,staticClass:"question",class:t.disableAnswers,on:{click:function(e){return t.actionAnswer(o,a)}}},[t._v(" "+t._s(a.text)+" ")])})),0):t._e()])},_t=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("img",{attrs:{src:a(587)}}),e("div",{staticClass:"title"},[t._v(" Выберите вариант: ")])])}],xt={props:{actualState:{},answers:[],disableAnswers:String},methods:{actionAnswer(t,e){this.$emit("actionanswer",e.action),e.deleteAnswer&&this.$emit("deleteanswer",t)}}},kt=xt,Dt=(0,p.Z)(kt,vt,_t,!1,null,null,null),It=Dt.exports,At=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-modal",attrs:{src:t.getImage,alt:"chat image"}})])},St=[],Mt={props:{chatImage:String},computed:{getImage(){return a(990)(`./${this.chatImage}`)}}},Qt=Mt,Pt=(0,p.Z)(Qt,At,St,!1,null,null,null),Nt=Pt.exports,Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-top-progress"},[e("div",{staticClass:"new-progress-item"},[t._m(0),e("div",{staticClass:"new-progress-indicators"},[e("div",{staticClass:"new-progress-name"},[t._v("Комфорт пациента")]),e("div",{staticClass:"new-progress-line"},[e("progress",{staticClass:"new-progress-bar",attrs:{max:"100"},domProps:{value:t.qualityReception}})])])]),e("div",{staticClass:"new-progress-item"},[t._m(1),e("div",{staticClass:"new-progress-indicators"},[e("div",{staticClass:"new-progress-name"},[t._v("Комфорт врача")]),e("div",{staticClass:"new-progress-line"},[e("progress",{staticClass:"new-progress-bar",attrs:{max:"100"},domProps:{value:t.doctorComfort}})])])])])},qt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-progress-image-container"},[e("img",{staticClass:"new-progress-image",attrs:{src:a(486)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-progress-image-container"},[e("img",{staticClass:"new-progress-image",attrs:{src:a(337)}})])}],Rt={props:{qualityReception:Number,doctorComfort:Number}},Tt=Rt,jt=(0,p.Z)(Tt,Lt,qt,!1,null,null,null),$t=jt.exports,Zt={components:{ChatMessage:wt,ChatQuestions:It,ImageModal:Nt,NewTopProgress:$t},props:{chatList:[],actualState:{},answers:[],disableAnswers:String,qualityReception:Number,doctorComfort:Number},methods:{actionAnswer(t){this.$emit("actionanswer",t)},deleteAnswer(t){this.$emit("deleteanswer",t)},scrollDown(){this.$refs.chartbox.scrollTop=this.$refs.chartbox.scrollHeight}}},Bt=Zt,Ot=(0,p.Z)(Bt,ht,ft,!1,null,null,null),Ht=Ot.exports,Ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-final-progress"},[t.actualStateData.head?e("div",{staticClass:"new-final-header"},[t._v(" "+t._s(t.actualStateData.head)+" ")]):t._e(),e("div",{staticClass:"new-final-main"},[e("div",{staticClass:"new-final-item"},[t._m(0),e("div",{staticClass:"new-final-indicators"},[e("div",{staticClass:"new-final-name"},[t._v("Комфорт пациента")]),e("div",{staticClass:"new-final-line"},[e("progress",{staticClass:"new-final-progress-bar",attrs:{max:"100"},domProps:{value:t.qualityReception}})])])]),e("div",{staticClass:"new-final-item"},[t._m(1),e("div",{staticClass:"new-progress-indicators"},[e("div",{staticClass:"new-progress-name"},[t._v("Комфорт врача")]),e("div",{staticClass:"new-progress-line"},[e("progress",{staticClass:"new-final-progress-bar",attrs:{max:"100"},domProps:{value:t.doctorComfort}})])])])]),t.actualStateData.body?e("div",{staticClass:"new-final-body"},[e("div",{staticClass:"new-final-body-text",domProps:{innerHTML:t._s(t.actualStateData.body)}})]):t._e(),t.actualStateData.footer?e("div",{staticClass:"new-final-footer"},t._l(t.actualStateData.footer.btnData,(function(a,o){return e("div",{key:o,staticClass:"new-final-button",on:{click:function(e){return t.buttonAction(a.action)}}},[t._v(" "+t._s(a.name)+" ")])})),0):t._e()])},Et=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-final-image-container"},[e("div",{staticClass:"new-final-image-wrapper"},[e("img",{staticClass:"new-final-image",attrs:{src:a(486)}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-final-image-container"},[e("div",{staticClass:"new-final-image-wrapper"},[e("img",{staticClass:"new-final-image",attrs:{src:a(337)}})])])}],Gt={props:{actualStateData:{},qualityReception:Number,doctorComfort:Number},methods:{buttonAction(t){this.$emit("action",t)}}},Ut=Gt,Vt=(0,p.Z)(Ut,Ft,Et,!1,null,null,null),Jt=Vt.exports,Wt=JSON.parse('[{"id":"startGame","type":"modalChoice","hideChatQuestions":true,"data":{"head":"Путь на работу","body":"Вы врач-онколог поликлиники, ведёте амбулаторный приём.<p><b>Ваши действия:</b></p>","footer":{"btnData":[{"name":"Придти на работу за 30 мин до начала приема, посетить WC, переодеть униформу, попить кофе, обсудить рабочие вопросы с коллегами, уточнить план на весь рабочий день, время перевязок, собраний и тд. Зайти в кабинете за 10 мин до приема.","action":{"type":"next"}},{"name":"Нет необходимости приходить на работу заранее, все равно раньше не уйдешь. И так вся жизнь на работе.","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"modalChoice","hideChatQuestions":true,"data":{"head":"Подготовка к приёму","body":"Вы в кабинете.<p><b>Ваши действия:</b></p>","footer":{"btnData":[{"class":"choice","name":"Сразу позвать пациентку, так как в коридоре уже много людей, по очереди и без, ожидающих прием.","action":{"type":"editQualityComfort","addComfort":-5,"action":{"type":"next"}}},{"class":"choice","name":"Включить необходимую аппаратуру (УЗИ, компьютер), открыть историю болезни пациентки, вспомнить о целе ее визита, подготовить ее карту.","action":{"type":"next"}}]}}},{"type":"modalChoice","hideChatQuestions":true,"data":{"head":"Комфорт в кабинете","body":"<p><b>Ваши действия, перед тем как войдёт пациентка:</b></p>","footer":{"btnData":[{"class":"choice","name":"Проветрить наличие всех инструментов для осмотра, стерильных тампонов, одноразовых пеленок и др.","action":{"type":"editQualityComfort","addComfort":-5,"action":{"type":"next"}}},{"class":"choice","name":"Не тратить на это время. Если будет что-то не в порядке, позвать медсестру, она все сделает во время приема. На приеме не всегда требуется осмотр.","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"modalChoice","hideChatQuestions":true,"data":{"head":"Данные о пациентке","body":"<p><b>Ваши действия перед тем как позвать пациентку:</b></p>","footer":{"btnData":[{"class":"choice","name":"Просмотреть данные о пациентки в мед карте.","action":{"type":"editQualityComfort","addComfort":-5,"action":{"type":"info","hideChatQuestions":true,"data":{"head":"Медицинская карта","body":"Вы уточнили, что у пациента пришел подтвержденный анализ на наличие рака желудка 1 стадии.<br>Вы понимаете, что пациентка будет очень расстроена. Подумайте о том, как сообщить пациенту о результате. Уточните пришел ли пациент с родственниками или один.<br>Заранее уточнить в информированном согласии, кому может быть сообщена информация о пациенте. Входят ли родственники в этот список.","footer":{"btnData":[{"name":"Далее","action":{"type":"next"}}]}}}}},{"class":"choice","name":"Я могу не тратить время на просмотр истории болезни, я помню всех пациентов. Надо побыстрее всех принять, люди уже нервничают в коридоре, а это нервирует меня.","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"modalChoice","hideChatQuestions":true,"data":{"head":"Разные обстоятельства","body":"Пациенты ожидают вызова на прием. В это время к вам заходит коллега с просьбой помочь ему в консультации.<p><b>Ваши действия:</b></p>","footer":{"btnData":[{"class":"choice","name":"Выйти с ним с из кабинета ничего не объяснив пациентам.","action":{"type":"editQualityComfort","addQuality":-5,"addComfort":-5,"action":{"type":"next"}}},{"class":"choice","name":"Уточнить у коллеги срочность вопроса, если нельзя этот вопрос отложить, сообщить пациентам , что вас срочно вызвали к экстренному больному и вы вернетесь в ближайшее время и всех примите.","action":{"type":"editQualityComfort","addComfort":-5,"action":{"type":"next"}}}]}}},{"type":"info","hideChatQuestions":true,"data":{"head":"Вызов пациента","body":"Вы вернулись в кабинет и вызвали первого пациента.","footer":{"btnData":[{"name":"Далее","action":{"type":"next"}}]}}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Доброе утро Алексей Петрович! Мне позвонили, что результаты гистологии готовы. Я пришла узнать, все ли у меня хорошо."}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Добрый день Светлана Павловна! Да, я попросил регистратуру вызвать вас на прием по результатам анализов. Присаживайтесь, пожалуйста.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Добрый день Светлана Павловна! Да, я попросил регистратуру вызвать вас на прием по результатам анализов. Присаживайтесь, пожалуйста."}],"action":{"type":"next"}}}},{"text":"Да, у вас пришли, к сожалению плохие анализы и надо срочно делать операцию.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Да, у вас пришли, к сожалению плохие анализы и надо срочно делать операцию."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Алексей Петрович, я плохо в этом разбираюсь, можно я позову свою дочь, она пришла со мной?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Да, конечно, можете позвать дочь","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Да, конечно, можете позвать дочь"}],"action":{"type":"next"}}}},{"text":"Я вам все объясню, решать же вам, а не дочери, как вам лечиться. Можете позвать, только побыстрее, пожалуйста.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Я вам все объясню, решать же вам, а не дочери, как вам лечиться. Можете позвать, только побыстрее, пожалуйста."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Так что со мной, Алексей Петрович?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Светлана Павловна, ваши анализы показали наличие опухоли, она имеет злокачественный характер. На биопсии мы взяли только маленький участок на анализ, и он показал, что необходимо удалить весь орган, пока не пошли метастазы по всему организму.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Светлана Павловна, ваши анализы показали наличие опухоли, она имеет злокачественный характер. На биопсии мы взяли только маленький участок на анализ, и он показал, что необходимо удалить весь орган, пока не пошли метастазы по всему организму."},{"isDoctor":false,"text":"Значит это лечится, я не умру (появляются слёзы). Спасибо, что вовремя выявили эту болячку."}],"action":{"type":"next"}}}},{"text":"Я вам еще раз говорю: Анализы плохие, надо делать операцию`. У вас онкология. Я вам сейчас выписываю направление на анализы и дообследование, подождите 1 минутку","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Я вам еще раз говорю: Анализы плохие, надо делать операцию`. У вас онкология. Я вам сейчас выписываю направление на анализы и дообследование, подождите 1 минутку"},{"isDoctor":false,"text":"Господи, я умру, я так и знала, что мне теперь делать?! (Начинает рыдать)"}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"answer","data":{"answers":[{"text":"Итак, переставайте рыдать, не вы первая не вы последняя, возьмите себя в руки: вы будете делать операцию или нет?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Итак, переставайте рыдать, не вы первая не вы последняя, возьмите себя в руки: вы будете делать операцию или нет?"},{"isDoctor":false,"text":"Я не знаю. Я не хочу умирать. Что это за операция? Сложная? Это опасно?"}],"action":{"type":"editQualityComfort","addQuality":-5,"addComfort":-5,"action":{"type":"next"}}}}},{"text":"Я правильно понимаю, что вы согласны на лечение. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Я правильно понимаю, что вы согласны на лечение. "},{"isDoctor":false,"text":"Да, конечно, сделаю все как вы скажете."}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Я расскажу подробнее: это операция называется субтотальная гастерэктомия (удаление большей части желудка с оставление кадильного отдела) Операция в настоящее время может выполняться лапароскопическим доступом, т. е. без разрезов на передней брюшной стенке. В вашем случае хирургическое лечение вовремя выполненное, обеспечивает выживаемость 80-90%.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Я расскажу подробнее: это операция называется субтотальная гастерэктомия (удаление большей части желудка с оставление кадильного отдела) Операция в настоящее время может выполняться лапароскопическим доступом, т. е. без разрезов на передней брюшной стенке. В вашем случае хирургическое лечение вовремя выполненное, обеспечивает выживаемость 80-90%."}],"action":{"type":"jumpToStep","stepId":"table8"}}}},{"text":"Это обычная рядовая операция через 3 маленьких прокола в животе. Мы их выполняем каждый день. Прогноз неплохой в вашем случае, что вы нервничаете. Вот вам список анализов. Операция назначена на указанное время и число. Приходите натощак в приемный покой. До свидания. Всего хорошего.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Это обычная рядовая операция через 3 маленьких прокола в животе. Мы их выполняем каждый день. Прогноз неплохой в вашем случае, что вы нервничаете. Вот вам список анализов. Операция назначена на указанное время и число. Приходите натощак в приемный покой. До свидания. Всего хорошего."},{"isDoctor":false,"text":"Да, конечно, сделаю все как вы скажите."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"jumpToStep","stepId":"table7"}}}}}]}},{"id":"table7","type":"talk","data":{"talk":[{"isDoctor":false,"text":"До свидания! (Пациентка выходит за дверь). «Я ничего не поняла. Надо забрать свои анализы. Лучше обратиться к другому врачу»"}],"action":{"type":"jumpToStep","stepId":"finalResume"}}},{"id":"table8","type":"talk","data":{"talk":[{"isDoctor":false,"text":"Спасибо, вы все подробно объяснили."}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Если у вас остались вопросы, задавайте. Если все понятно, я вам сейчас подробно расскажу, какие анализы сдавать. Вам все понятно?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Если у вас остались вопросы, задавайте. Если все понятно, я вам сейчас подробно расскажу, какие анализы сдавать. Вам все понятно?"},{"isDoctor":false,"text":"Да"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Тогда жду вас в назначенный день к 8.00 натощак. Не забывайте паспорт, ОМС, СНИЛС. Операция у вас будет по квоте. До скорой встречи.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Тогда жду вас в назначенный день к 8.00 натощак. Не забывайте паспорт, ОМС, СНИЛС. Операция у вас будет по квоте. До скорой встречи."},{"isDoctor":false,"text":"Спасибо я все сделаю. До свидания! Выходит за дверь: «Обязательно оставлю хороший отзыв»."}],"action":{"type":"next"}}}}]}},{"id":"finalResume","type":"finalProgress","hideChat":true,"data":{"head":"Результат","body":"<p>Данный сценарий был составлен на основе Калгари-Кембриджской модели проведения медицинской консультации</p>","footer":{"btnData":[{"name":"Поиграть еще раз","action":{"type":"jumpToStepClearChat","stepId":"startGame"}},{"name":"Анализ ситуации","action":{"type":"next"}}]}}},{"type":"info","data":{"head":"Анализ ситуации","body":"<p><b>1. Подготовка к приему:</b><ul><li>Необходимо завершить все вопросы по предыдущей консультации (к незавершенным вопросам можно вернуться чуть позже).</ul><p><b>2. Позаботиться о комфорте в кабинете:</b><ul><li>Например: проветрить; вкл/выкл. кондиционер; настроить освещение и др. Комфортные условия повышают эффективность взаимодействия врача и пациента, позволяют не упустить что-то важное.</ul><p><b>3. Позаботиться о ваших личных потребностях:</b><ul><li>Например: утолить жажду; посетить уборную; принять таблетку. Плохое на</ul><p><b>4. Освежить данные о пациенте, если прием повторный:</b><ul><li>Просмотреть данные в мед карте или компьютере.<li>Найти результаты предыдущий обследований.<li>Подумать об анамнезе пациента ( аллергия, операции...).<li>Продумать предварительный план дальнейшего лечения.</ul><p><b>5. Пациент вошел в кабинет:</b><ul><li>Представиться, если пациент пришел впервые.</ul><p><b>6. Если пациент пришел не один</b><ul><li>Пригласить партнера на прием, при согласии и желании пациента.</ul><p><b>7. Выяснение повода для приема:</b><ul><li>Выслушать сначала все что скажет пациент, не перебивая его.<li>Вербально и словесно дать знать пациенту, что вы его готовы слушать дальше.<li>Задавать уточняющие вопросы.<li>Резюмировать сказанное пациентом, чтобы понять верно ли Вы всё правильно поняли, а пациент ничего не забыл.</ul><p><b>8. Принятие плана консультации:</b><ul><li>Продолжить сбор анамнеза.<li>Определить проблему.<li>Перейти к подбору терапии.</ul><p><b>9. Физикальное обследование:</b><ul><li>Рассказать о необходимости физикального обследования.<li>Получить письменное информированное согласие.</ul><p><b>10. Объяснение и планирование:</b><ul><li>Врач должен уловить сигналы и проявить эмпатию.<li>Объяснить суть проблемы понятным для пациента языком.<li>Составить план дальнейших действий.</ul><p><b>11. Завершение консультации:</b><ul><li>Согласовать с пациентом его дальнейшие действия.<li>Дать необходимые указания.<li>Назначить повторный приём (при необходимости)</ul>","footer":{"btnData":[{"name":"Назад","action":{"type":"jumpToStep","stepId":"finalResume"}}]}}}]'),zt={name:"App",data(){return{patientAnswersArray:[],stepNumber:0,showModal:!1,showModalChoice:!1,showImageModal:!1,modalInfo:{},modalImageData:{},disableAnswers:"",answers:[],chatList:[],mainBranch:Wt,actualState:{},qualityReception:100,doctorComfort:100}},components:{InfoModal:nt,ModalChoice:pt,ViewChat:Ht,NewFinalProgress:Jt},methods:{sleep(t){return new Promise((e=>setTimeout(e,t)))},async addMessages(t,e){for(let a=0;a<t.length;a++)this.chatList.push(t[a]),await this.sleep(1e3);e()},doAction(t){if("next"===t.type&&this.stepNumber<this.mainBranch.length-1)this.stepNumber+=1,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.showModalChoice=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState);else if("close"===t.type)this.showModal=!1,this.showModalChoice=!1;else if("closeCheck"===t.type)this.showModal=!1,this.showModalChoice=!1,this.doAction(t.action);else if("info"===t.type)this.modalInfo=t.data,this.showModal=!0,this.showModalChoice=!1;else if("modalChoice"===t.type)this.modalInfo=t.data,this.showModalChoice=!0,this.showModal=!1;else if("answer"===t.type){this.actualState=t;for(let t=0;t<this.actualState.data.answers.length;t++)this.answers.push(this.actualState.data.answers[t])}else if("talk"===t.type)this.disableAnswers="disable-answer",this.addMessages(t.data.talk,(()=>{"next"===t.data.action.type&&(this.answers.length=0),this.doAction(t.data.action),this.disableAnswers=""}));else if("checkAnswerList"===t.type)0===this.answers.length&&this.doAction({type:"next"});else if("jumpToStep"===t.type){const e=this.mainBranch.findIndex((e=>e.id===t.stepId));-1===e?console.log(`Error: can't find stepId "${t.stepId}" in data`):(this.stepNumber=e,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.showModalChoice=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState))}else if("jumpToStepClearChat"===t.type)this.stepNumber=this.mainBranch.findIndex((e=>e.id===t.stepId)),this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.showModalChoice=!1,this.chatList.length=0,this.answers.length>0&&(this.answers.length=0),this.qualityReception=100,this.doctorComfort=100,this.doAction(this.actualState);else if("openLink"===t.type)window.open(t.url,"_blank");else if("writePatientChoice"===t.type)this.showModal=!1,this.showModalChoice=!1,this.patientAnswersArray.push([t.questionNumber,t.answerNumber]),this.doAction(t.action);else if("runChoiceAnswers"===t.type){const e=this.patientAnswersArray;e.sort(((t,e)=>t[0]-e[0]));const a=e.map((t=>t[1])).join("");this.patientAnswersArray.length=0;const o=t.data.resumeArray.find((t=>t.choiceAnswers==a));this.doAction(o.action)}else"editQualityComfort"===t.type&&(this.changeQualityComfort(t),t.action&&this.doAction(t.action))},changeQualityComfort(t){if(t.addQuality){let e=this.qualityReception+=t.addQuality;this.qualityReception=e<0?0:e>100?100:e}if(t.addComfort){let e=this.doctorComfort+=t.addComfort;this.doctorComfort=e<0?0:e>100?100:e}},deleteanswer(t){this.answers.splice(t,1)}},created(){this.actualState=this.mainBranch[this.stepNumber],this.doAction(this.actualState)}},Kt=zt,Xt=(0,p.Z)(Kt,s,i,!1,null,null,null),Yt=Xt.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(Yt)}).$mount("#app")},990:function(t,e,a){var o={"./background.jpeg":380,"./chat_logo.svg":587,"./choicePatient1.jpg":708,"./choicePatient2.jpg":241,"./doctor2.svg":8,"./girl_doctor.svg":17,"./girl_patient.svg":714,"./green1.jpg":396,"./patient2.svg":75,"./progress_doctor_man.svg":337,"./progress_doctor_woman.svg":963,"./progress_patient_woman.svg":486,"./risk1.jpg":579};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=i,t.exports=s,s.id=990},587:function(t,e,a){"use strict";t.exports=a.p+"img/chat_logo.eae898f3.svg"},8:function(t,e,a){"use strict";t.exports=a.p+"img/doctor2.ba1adc31.svg"},17:function(t,e,a){"use strict";t.exports=a.p+"img/girl_doctor.e2cb0516.svg"},714:function(t,e,a){"use strict";t.exports=a.p+"img/girl_patient.d2f21e9b.svg"},75:function(t,e,a){"use strict";t.exports=a.p+"img/patient2.e2899c44.svg"},337:function(t,e,a){"use strict";t.exports=a.p+"img/progress_doctor_man.d17899ab.svg"},963:function(t,e,a){"use strict";t.exports=a.p+"img/progress_doctor_woman.b473ce07.svg"},486:function(t,e,a){"use strict";t.exports=a.p+"img/progress_patient_woman.bb36848a.svg"},380:function(t,e,a){"use strict";t.exports=a.p+"img/background.390c800b.jpeg"},708:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient1.1b16df50.jpg"},241:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient2.b1a8d607.jpg"},396:function(t,e,a){"use strict";t.exports=a.p+"img/green1.f964c776.jpg"},579:function(t,e,a){"use strict";t.exports=a.p+"img/risk1.cf191b99.jpg"}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,i){if(!o){var n=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],i=t[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[c])}))?o.splice(c--,1):(r=!1,i<n&&(n=i));if(r){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,s,i]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,n=o[0],r=o[1],c=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(c)var d=c(a)}for(e&&e(o);l<n.length;l++)i=n[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},o=self["webpackChunkmedtest3"]=self["webpackChunkmedtest3"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(987)}));o=a.O(o)})();
//# sourceMappingURL=app.ba5f1c87.js.map