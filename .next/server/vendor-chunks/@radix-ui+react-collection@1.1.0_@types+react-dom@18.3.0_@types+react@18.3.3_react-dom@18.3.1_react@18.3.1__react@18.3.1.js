"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-collection@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-collection@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollection: () => (/* binding */ createCollection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ createCollection auto */ // packages/react/collection/src/Collection.tsx\n\n\n\n\n\nfunction createCollection(name) {\n    const PROVIDER_NAME = name + \"CollectionProvider\";\n    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(PROVIDER_NAME);\n    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {\n        collectionRef: {\n            current: null\n        },\n        itemMap: /* @__PURE__ */ new Map()\n    });\n    const CollectionProvider = (props)=>{\n        const { scope, children } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map()).current;\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl, {\n            scope,\n            itemMap,\n            collectionRef: ref,\n            children\n        });\n    };\n    CollectionProvider.displayName = PROVIDER_NAME;\n    const COLLECTION_SLOT_NAME = name + \"CollectionSlot\";\n    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children } = props;\n        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, context.collectionRef);\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionSlot.displayName = COLLECTION_SLOT_NAME;\n    const ITEM_SLOT_NAME = name + \"CollectionItemSlot\";\n    const ITEM_DATA_ATTR = \"data-radix-collection-item\";\n    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope, children, ...itemData } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref);\n        const context = useCollectionContext(ITEM_SLOT_NAME, scope);\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n            context.itemMap.set(ref, {\n                ref,\n                ...itemData\n            });\n            return ()=>void context.itemMap.delete(ref);\n        });\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {\n            ...{\n                [ITEM_DATA_ATTR]: \"\"\n            },\n            ref: composedRefs,\n            children\n        });\n    });\n    CollectionItemSlot.displayName = ITEM_SLOT_NAME;\n    function useCollection(scope) {\n        const context = useCollectionContext(name + \"CollectionConsumer\", scope);\n        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{\n            const collectionNode = context.collectionRef.current;\n            if (!collectionNode) return [];\n            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));\n            const items = Array.from(context.itemMap.values());\n            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));\n            return orderedItems;\n        }, [\n            context.collectionRef,\n            context.itemMap\n        ]);\n        return getItems;\n    }\n    return [\n        {\n            Provider: CollectionProvider,\n            Slot: CollectionSlot,\n            ItemSlot: CollectionItemSlot\n        },\n        useCollection,\n        createCollectionScope\n    ];\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbGxlY3Rpb25AMS4xLjBfQHR5cGVzK3JlYWN0LWRvbUAxOC4zLjBfQHR5cGVzK3JlYWN0QDE4LjMuM19yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29sbGVjdGlvbi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtCO0FBQ2lCO0FBQ0g7QUFDWDtBQW9DZjtBQXZCTixTQUFTSyxpQkFBaUVDLElBQUE7SUFLeEUsTUFBTUMsZ0JBQWdCRCxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0UseUJBQXlCQyxzQkFBcUIsR0FBSVIsMkVBQWtCQSxDQUFDTTtJQU81RSxNQUFNLENBQUNHLHdCQUF3QkMscUJBQW9CLEdBQUlILHdCQUNyREQsZUFDQTtRQUFFSyxlQUFlO1lBQUVDLFNBQVM7UUFBSztRQUFHQyxTQUFTLG9CQUFJQztJQUFNO0lBR3pELE1BQU1DLHFCQUEyRSxDQUFDQztRQUNoRixNQUFNLEVBQUVDLEtBQUEsRUFBT0MsUUFBQSxFQUFTLEdBQUlGO1FBQzVCLE1BQU1HLE1BQU1wQix5Q0FBTSxDQUEwQjtRQUM1QyxNQUFNYyxVQUFVZCx5Q0FBTSxDQUFnQyxvQkFBSWUsT0FBT0YsT0FBQTtRQUNqRSxPQUNFLGdCQUFBVCxzREFBQUEsQ0FBQ00sd0JBQUE7WUFBdUJRO1lBQWNKO1lBQWtCRixlQUFlUTtZQUNwRUQ7UUFBQTtJQUdQO0lBRUFILG1CQUFtQk0sV0FBQSxHQUFjZjtJQU1qQyxNQUFNZ0IsdUJBQXVCakIsT0FBTztJQUVwQyxNQUFNa0IsK0JBQWlCeEIsNkNBQU0sQ0FDM0IsQ0FBQ2lCLE9BQU9TO1FBQ04sTUFBTSxFQUFFUixLQUFBLEVBQU9DLFFBQUEsRUFBUyxHQUFJRjtRQUM1QixNQUFNVSxVQUFVaEIscUJBQXFCWSxzQkFBc0JMO1FBQzNELE1BQU1VLGVBQWUxQiw2RUFBZUEsQ0FBQ3dCLGNBQWNDLFFBQVFmLGFBQWE7UUFDeEUsT0FBTyxnQkFBQVIsc0RBQUFBLENBQUNELHNEQUFJQSxFQUFKO1lBQUtpQixLQUFLUTtZQUFlVDtRQUFBO0lBQ25DO0lBR0ZLLGVBQWVGLFdBQUEsR0FBY0M7SUFNN0IsTUFBTU0saUJBQWlCdkIsT0FBTztJQUM5QixNQUFNd0IsaUJBQWlCO0lBT3ZCLE1BQU1DLG1DQUFxQi9CLDZDQUFNLENBQy9CLENBQUNpQixPQUFPUztRQUNOLE1BQU0sRUFBRVIsS0FBQSxFQUFPQyxRQUFBLEVBQVUsR0FBR2EsVUFBUyxHQUFJZjtRQUN6QyxNQUFNRyxNQUFNcEIseUNBQU0sQ0FBb0I7UUFDdEMsTUFBTTRCLGVBQWUxQiw2RUFBZUEsQ0FBQ3dCLGNBQWNOO1FBQ25ELE1BQU1PLFVBQVVoQixxQkFBcUJrQixnQkFBZ0JYO1FBRXJEbEIsNENBQU0sQ0FBVTtZQUNkMkIsUUFBUWIsT0FBQSxDQUFRb0IsR0FBQSxDQUFJZCxLQUFLO2dCQUFFQTtnQkFBSyxHQUFJWSxRQUFBO1lBQWlDO1lBQ3JFLE9BQU8sSUFBTSxLQUFLTCxRQUFRYixPQUFBLENBQVFxQixNQUFBLENBQU9mO1FBQzNDO1FBRUEsT0FDRSxnQkFBQWhCLHNEQUFBQSxDQUFDRCxzREFBSUEsRUFBSjtZQUFNLEdBQUc7Z0JBQUUsQ0FBQzJCLGVBQWMsRUFBRztZQUFHO1lBQUdWLEtBQUtRO1lBQ3RDVDtRQUFBO0lBR1A7SUFHRlksbUJBQW1CVCxXQUFBLEdBQWNPO0lBTWpDLFNBQVNPLGNBQWNsQixLQUFBO1FBQ3JCLE1BQU1TLFVBQVVoQixxQkFBcUJMLE9BQU8sc0JBQXNCWTtRQUVsRSxNQUFNbUIsV0FBV3JDLDhDQUFNLENBQVk7WUFDakMsTUFBTXVDLGlCQUFpQlosUUFBUWYsYUFBQSxDQUFjQyxPQUFBO1lBQzdDLElBQUksQ0FBQzBCLGdCQUFnQixPQUFPLEVBQUM7WUFDN0IsTUFBTUMsZUFBZUMsTUFBTUMsSUFBQSxDQUFLSCxlQUFlSSxnQkFBQSxDQUFpQixJQUFJYixlQUFjLEVBQUc7WUFDckYsTUFBTWMsUUFBUUgsTUFBTUMsSUFBQSxDQUFLZixRQUFRYixPQUFBLENBQVErQixNQUFBO1lBQ3pDLE1BQU1DLGVBQWVGLE1BQU1HLElBQUEsQ0FDekIsQ0FBQ0MsR0FBR0MsSUFBTVQsYUFBYVUsT0FBQSxDQUFRRixFQUFFNUIsR0FBQSxDQUFJUCxPQUFRLElBQUkyQixhQUFhVSxPQUFBLENBQVFELEVBQUU3QixHQUFBLENBQUlQLE9BQVE7WUFFdEYsT0FBT2lDO1FBQ1QsR0FBRztZQUFDbkIsUUFBUWYsYUFBQTtZQUFlZSxRQUFRYixPQUFPO1NBQUM7UUFFM0MsT0FBT3VCO0lBQ1Q7SUFFQSxPQUFPO1FBQ0w7WUFBRWMsVUFBVW5DO1lBQW9CYixNQUFNcUI7WUFBZ0I0QixVQUFVckI7UUFBbUI7UUFDbkZLO1FBQ0EzQjtLQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3luZXVyYWwvLi4vc3JjL0NvbGxlY3Rpb24udHN4Pzc5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHRTY29wZSB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1jb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbXBvc2VkUmVmcyB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcblxudHlwZSBTbG90UHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNsb3Q+O1xudHlwZSBDb2xsZWN0aW9uRWxlbWVudCA9IEhUTUxFbGVtZW50O1xuaW50ZXJmYWNlIENvbGxlY3Rpb25Qcm9wcyBleHRlbmRzIFNsb3RQcm9wcyB7XG4gIHNjb3BlOiBhbnk7XG59XG5cbi8vIFdlIGhhdmUgcmVzb3J0ZWQgdG8gcmV0dXJuaW5nIHNsb3RzIGRpcmVjdGx5IHJhdGhlciB0aGFuIGV4cG9zaW5nIHByaW1pdGl2ZXMgdGhhdCBjYW4gdGhlblxuLy8gYmUgc2xvdHRlZCBsaWtlIGA8Q29sbGVjdGlvbkl0ZW0gYXM9e1Nsb3R9PuKApjwvQ29sbGVjdGlvbkl0ZW0+YC5cbi8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBlbmNvdW50ZXJlZCBpc3N1ZXMgd2l0aCBnZW5lcmljIHR5cGVzIHRoYXQgY2Fubm90IGJlIHN0YXRpY2FsbHkgYW5hbHlzZWRcbi8vIGR1ZSB0byBjcmVhdGluZyB0aGVtIGR5bmFtaWNhbGx5IHZpYSBjcmVhdGVDb2xsZWN0aW9uLlxuXG5mdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uPEl0ZW1FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQsIEl0ZW1EYXRhID0ge30+KG5hbWU6IHN0cmluZykge1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uUHJvdmlkZXJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBjb25zdCBQUk9WSURFUl9OQU1FID0gbmFtZSArICdDb2xsZWN0aW9uUHJvdmlkZXInO1xuICBjb25zdCBbY3JlYXRlQ29sbGVjdGlvbkNvbnRleHQsIGNyZWF0ZUNvbGxlY3Rpb25TY29wZV0gPSBjcmVhdGVDb250ZXh0U2NvcGUoUFJPVklERVJfTkFNRSk7XG5cbiAgdHlwZSBDb250ZXh0VmFsdWUgPSB7XG4gICAgY29sbGVjdGlvblJlZjogUmVhY3QuUmVmT2JqZWN0PENvbGxlY3Rpb25FbGVtZW50PjtcbiAgICBpdGVtTWFwOiBNYXA8UmVhY3QuUmVmT2JqZWN0PEl0ZW1FbGVtZW50PiwgeyByZWY6IFJlYWN0LlJlZk9iamVjdDxJdGVtRWxlbWVudD4gfSAmIEl0ZW1EYXRhPjtcbiAgfTtcblxuICBjb25zdCBbQ29sbGVjdGlvblByb3ZpZGVySW1wbCwgdXNlQ29sbGVjdGlvbkNvbnRleHRdID0gY3JlYXRlQ29sbGVjdGlvbkNvbnRleHQ8Q29udGV4dFZhbHVlPihcbiAgICBQUk9WSURFUl9OQU1FLFxuICAgIHsgY29sbGVjdGlvblJlZjogeyBjdXJyZW50OiBudWxsIH0sIGl0ZW1NYXA6IG5ldyBNYXAoKSB9XG4gICk7XG5cbiAgY29uc3QgQ29sbGVjdGlvblByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlOyBzY29wZTogYW55IH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzY29wZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxDb2xsZWN0aW9uRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgaXRlbU1hcCA9IFJlYWN0LnVzZVJlZjxDb250ZXh0VmFsdWVbJ2l0ZW1NYXAnXT4obmV3IE1hcCgpKS5jdXJyZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sbGVjdGlvblByb3ZpZGVySW1wbCBzY29wZT17c2NvcGV9IGl0ZW1NYXA9e2l0ZW1NYXB9IGNvbGxlY3Rpb25SZWY9e3JlZn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29sbGVjdGlvblByb3ZpZGVySW1wbD5cbiAgICApO1xuICB9O1xuXG4gIENvbGxlY3Rpb25Qcm92aWRlci5kaXNwbGF5TmFtZSA9IFBST1ZJREVSX05BTUU7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29sbGVjdGlvblNsb3RcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBjb25zdCBDT0xMRUNUSU9OX1NMT1RfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvblNsb3QnO1xuXG4gIGNvbnN0IENvbGxlY3Rpb25TbG90ID0gUmVhY3QuZm9yd2FyZFJlZjxDb2xsZWN0aW9uRWxlbWVudCwgQ29sbGVjdGlvblByb3BzPihcbiAgICAocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICAgICAgY29uc3QgeyBzY29wZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgICAgY29uc3QgY29udGV4dCA9IHVzZUNvbGxlY3Rpb25Db250ZXh0KENPTExFQ1RJT05fU0xPVF9OQU1FLCBzY29wZSk7XG4gICAgICBjb25zdCBjb21wb3NlZFJlZnMgPSB1c2VDb21wb3NlZFJlZnMoZm9yd2FyZGVkUmVmLCBjb250ZXh0LmNvbGxlY3Rpb25SZWYpO1xuICAgICAgcmV0dXJuIDxTbG90IHJlZj17Y29tcG9zZWRSZWZzfT57Y2hpbGRyZW59PC9TbG90PjtcbiAgICB9XG4gICk7XG5cbiAgQ29sbGVjdGlvblNsb3QuZGlzcGxheU5hbWUgPSBDT0xMRUNUSU9OX1NMT1RfTkFNRTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uSXRlbVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGNvbnN0IElURU1fU0xPVF9OQU1FID0gbmFtZSArICdDb2xsZWN0aW9uSXRlbVNsb3QnO1xuICBjb25zdCBJVEVNX0RBVEFfQVRUUiA9ICdkYXRhLXJhZGl4LWNvbGxlY3Rpb24taXRlbSc7XG5cbiAgdHlwZSBDb2xsZWN0aW9uSXRlbVNsb3RQcm9wcyA9IEl0ZW1EYXRhICYge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgc2NvcGU6IGFueTtcbiAgfTtcblxuICBjb25zdCBDb2xsZWN0aW9uSXRlbVNsb3QgPSBSZWFjdC5mb3J3YXJkUmVmPEl0ZW1FbGVtZW50LCBDb2xsZWN0aW9uSXRlbVNsb3RQcm9wcz4oXG4gICAgKHByb3BzLCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgICAgIGNvbnN0IHsgc2NvcGUsIGNoaWxkcmVuLCAuLi5pdGVtRGF0YSB9ID0gcHJvcHM7XG4gICAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SXRlbUVsZW1lbnQ+KG51bGwpO1xuICAgICAgY29uc3QgY29tcG9zZWRSZWZzID0gdXNlQ29tcG9zZWRSZWZzKGZvcndhcmRlZFJlZiwgcmVmKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb2xsZWN0aW9uQ29udGV4dChJVEVNX1NMT1RfTkFNRSwgc2NvcGUpO1xuXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb250ZXh0Lml0ZW1NYXAuc2V0KHJlZiwgeyByZWYsIC4uLihpdGVtRGF0YSBhcyB1bmtub3duIGFzIEl0ZW1EYXRhKSB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHZvaWQgY29udGV4dC5pdGVtTWFwLmRlbGV0ZShyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTbG90IHsuLi57IFtJVEVNX0RBVEFfQVRUUl06ICcnIH19IHJlZj17Y29tcG9zZWRSZWZzfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2xvdD5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIENvbGxlY3Rpb25JdGVtU2xvdC5kaXNwbGF5TmFtZSA9IElURU1fU0xPVF9OQU1FO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIHVzZUNvbGxlY3Rpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBmdW5jdGlvbiB1c2VDb2xsZWN0aW9uKHNjb3BlOiBhbnkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQobmFtZSArICdDb2xsZWN0aW9uQ29uc3VtZXInLCBzY29wZSk7XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25Ob2RlID0gY29udGV4dC5jb2xsZWN0aW9uUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoIWNvbGxlY3Rpb25Ob2RlKSByZXR1cm4gW107XG4gICAgICBjb25zdCBvcmRlcmVkTm9kZXMgPSBBcnJheS5mcm9tKGNvbGxlY3Rpb25Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoYFske0lURU1fREFUQV9BVFRSfV1gKSk7XG4gICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oY29udGV4dC5pdGVtTWFwLnZhbHVlcygpKTtcbiAgICAgIGNvbnN0IG9yZGVyZWRJdGVtcyA9IGl0ZW1zLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PiBvcmRlcmVkTm9kZXMuaW5kZXhPZihhLnJlZi5jdXJyZW50ISkgLSBvcmRlcmVkTm9kZXMuaW5kZXhPZihiLnJlZi5jdXJyZW50ISlcbiAgICAgICk7XG4gICAgICByZXR1cm4gb3JkZXJlZEl0ZW1zO1xuICAgIH0sIFtjb250ZXh0LmNvbGxlY3Rpb25SZWYsIGNvbnRleHQuaXRlbU1hcF0pO1xuXG4gICAgcmV0dXJuIGdldEl0ZW1zO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICB7IFByb3ZpZGVyOiBDb2xsZWN0aW9uUHJvdmlkZXIsIFNsb3Q6IENvbGxlY3Rpb25TbG90LCBJdGVtU2xvdDogQ29sbGVjdGlvbkl0ZW1TbG90IH0sXG4gICAgdXNlQ29sbGVjdGlvbixcbiAgICBjcmVhdGVDb2xsZWN0aW9uU2NvcGUsXG4gIF0gYXMgY29uc3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24gfTtcbmV4cG9ydCB0eXBlIHsgQ29sbGVjdGlvblByb3BzIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0U2NvcGUiLCJ1c2VDb21wb3NlZFJlZnMiLCJTbG90IiwianN4IiwiY3JlYXRlQ29sbGVjdGlvbiIsIm5hbWUiLCJQUk9WSURFUl9OQU1FIiwiY3JlYXRlQ29sbGVjdGlvbkNvbnRleHQiLCJjcmVhdGVDb2xsZWN0aW9uU2NvcGUiLCJDb2xsZWN0aW9uUHJvdmlkZXJJbXBsIiwidXNlQ29sbGVjdGlvbkNvbnRleHQiLCJjb2xsZWN0aW9uUmVmIiwiY3VycmVudCIsIml0ZW1NYXAiLCJNYXAiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJwcm9wcyIsInNjb3BlIiwiY2hpbGRyZW4iLCJyZWYiLCJ1c2VSZWYiLCJkaXNwbGF5TmFtZSIsIkNPTExFQ1RJT05fU0xPVF9OQU1FIiwiQ29sbGVjdGlvblNsb3QiLCJmb3J3YXJkUmVmIiwiZm9yd2FyZGVkUmVmIiwiY29udGV4dCIsImNvbXBvc2VkUmVmcyIsIklURU1fU0xPVF9OQU1FIiwiSVRFTV9EQVRBX0FUVFIiLCJDb2xsZWN0aW9uSXRlbVNsb3QiLCJpdGVtRGF0YSIsInVzZUVmZmVjdCIsInNldCIsImRlbGV0ZSIsInVzZUNvbGxlY3Rpb24iLCJnZXRJdGVtcyIsInVzZUNhbGxiYWNrIiwiY29sbGVjdGlvbk5vZGUiLCJvcmRlcmVkTm9kZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbXMiLCJ2YWx1ZXMiLCJvcmRlcmVkSXRlbXMiLCJzb3J0IiwiYSIsImIiLCJpbmRleE9mIiwiUHJvdmlkZXIiLCJJdGVtU2xvdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-collection/dist/index.mjs\n");

/***/ })

};
;