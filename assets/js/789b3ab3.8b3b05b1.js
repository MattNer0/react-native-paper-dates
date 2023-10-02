"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Time Picker",p={unversionedId:"time-picker",id:"time-picker",title:"Time Picker",description:"The time picker provides a modal allowing the selection or input of a time.",source:"@site/docs/time-picker.md",sourceDirName:".",slug:"/time-picker",permalink:"/react-native-paper-dates/docs/time-picker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-native-paper-dates/docs/intro"},next:{title:"Date Picker",permalink:"/react-native-paper-dates/docs/category/date-picker"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Props",id:"props",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time-picker"},"Time Picker"),(0,r.kt)("p",null,"The time picker provides a modal allowing the selection or input of a time."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from \"react\";\nimport { View, Text } from \"react-native\";\nimport { Button } from 'react-native-paper';\nimport { TimePickerModal } from 'react-native-paper-dates';\nimport { SafeAreaProvider } from \"react-native-safe-area-context\";\n\nexport default function App() {\n  const [visible, setVisible] = React.useState(false)\n  const onDismiss = React.useCallback(() => {\n    setVisible(false)\n  }, [setVisible])\n\n  const onConfirm = React.useCallback(\n    ({ hours, minutes }) => {\n      setVisible(false);\n      console.log({ hours, minutes });\n    },\n    [setVisible]\n  );\n\n  return (\n    <SafeAreaProvider>\n      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>\n        <Button onPress={() => setVisible(true)} uppercase={false} mode=\"outlined\">\n          Pick time\n        </Button>\n        <TimePickerModal\n          visible={visible}\n          onDismiss={onDismiss}\n          onConfirm={onConfirm}\n          hours={12}\n          minutes={14}\n        />\n      </View>\n    </SafeAreaProvider>\n  );\n}\n")),(0,r.kt)("h2",{id:"live-example"},"Live Example"),(0,r.kt)("p",null,"View an interactive ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.dev/@fitzwabs/react-native-paper-dates-time-picker"},"Expo snack"),"."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"locale (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String"),(0,r.kt)("br",{parentName:"p"}),"\n","A locale can be composed of both a base language, the country (territory) of use, and possibly codeset (which is usually assumed). For example, German is de."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"visible (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean"),(0,r.kt)("br",{parentName:"p"}),"\n","Flag indicating if the component should be displayed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onDismiss (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Function"),(0,r.kt)("br",{parentName:"p"}),"\n","The action to take when the component is closed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onConfirm (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Function"),(0,r.kt)("br",{parentName:"p"}),"\n","The action to take when the date is selected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hours"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: number | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The hours values used to populate the component. Defaults to the current hour."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minutes"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: number | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The minutes values used to populate the component. Defaults to the current minutes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"label"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The label used as the header in the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'Select time'"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uppercase"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","Flag indicating if the text in the component should be uppercase. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cancelLabel"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The label that will close the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'Cancel'"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"confirmLabel"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The label that will confirm the component selection. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'Ok'"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"animationType"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The animation used when opening the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'slide'")," on ios/android and ",(0,r.kt)("inlineCode",{parentName:"p"},"'none'")," on web."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"keyboardIcon"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: string | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The icon used to toggle between the OS input. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"keyboard-outline"),". You can pass the name of an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"MaterialCommunityIcons"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clockIcon"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: string | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The icon used to toggle between time picker and input. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"clock-outline"),". You can pass the name of an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"MaterialCommunityIcons"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"use24HourClock"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean | undefined"),"\nFlag indicating if the time input should use the 24 hours clock. Defaults to the system clock."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"inputFontSize"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: number | undefined"),"\nFont size of the time input. Defaults to 57. Useful when using a custom font."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"defaultInputType"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: 'picker' | 'keyboard'"),"\nWhich input type to use by default. Defaults to the clock-face picker."))}m.isMDXComponent=!0}}]);