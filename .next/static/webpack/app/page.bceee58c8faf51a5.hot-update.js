"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\"use strict\";\n\nfunction Home() {\n    _s();\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentCount, SetCurrentCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [updatedAt, setUpdatedAt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const addClick = async ()=>{\n        try {\n            const data = await fetch(\"/api/clicks\");\n            const responce = await data.json();\n            logData(responce.runningCount);\n            setAllData(responce.runningCount);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const logData = (e)=>{\n        console.log(\"data\", e);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"click\", ()=>{\n            addClick();\n        });\n        const fetchData = async ()=>{\n            try {\n                const data = await fetch(\"/api/clicks\");\n                const responce = await data.json();\n                logData(responce.runningCount);\n                setAllData(responce.runningCount);\n            } catch (e) {\n                console.log(e);\n            }\n        };\n        fetchData();\n    }, []);\n    if (!allData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Running Count : \",\n                        allData[0].click_count,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Last Click : \",\n                        allData[0].timestamp,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Home, \"5fNmI+QAev3WwoMnpCZs7Urm9sM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUU0QztBQUU3QixTQUFTRTs7SUFFdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUSxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtZQUN6QixNQUFNQyxXQUFXLE1BQU1GLEtBQUtHLElBQUk7WUFDaENDLFFBQVFGLFNBQVNHLFlBQVk7WUFDN0JYLFdBQVdRLFNBQVNHLFlBQVk7UUFDbEMsRUFBRSxPQUFPQyxHQUFHO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTUYsVUFBVSxDQUFDRTtRQUVmQyxRQUFRQyxHQUFHLENBQUMsUUFBUUY7SUFFdEI7SUFJQWhCLGdEQUFTQSxDQUFDO1FBRVJtQixTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ2pDWDtRQUNGO1FBQ0EsTUFBTVksWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1YLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQ0MsUUFBUUYsU0FBU0csWUFBWTtnQkFDN0JYLFdBQVdRLFNBQVNHLFlBQVk7WUFDbEMsRUFBRSxPQUFPQyxHQUFHO2dCQUNWQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUVBSztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ2xCLFNBQVM7UUFDWixxQkFBTyw4REFBQ21CO3NCQUFJOzs7Ozs7SUFDZCxPQUFPO1FBRUwscUJBQ0UsOERBQUNBOzs4QkFDQyw4REFBQ0M7O3dCQUFFO3dCQUFrQnBCLE9BQU8sQ0FBQyxFQUFFLENBQUNxQixXQUFXO3dCQUFDOzs7Ozs7OzhCQUM1Qyw4REFBQ0Q7O3dCQUFFO3dCQUFlcEIsT0FBTyxDQUFDLEVBQUUsQ0FBQ3NCLFNBQVM7d0JBQUM7Ozs7Ozs7Ozs7Ozs7SUFHN0M7QUFDRjtHQXZEd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2N1cnJlbnRDb3VudCwgU2V0Q3VycmVudENvdW50XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt1cGRhdGVkQXQsIHNldFVwZGF0ZWRBdF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGFkZENsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NsaWNrc1wiKVxuICAgICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBkYXRhLmpzb24oKVxuICAgICAgbG9nRGF0YShyZXNwb25jZS5ydW5uaW5nQ291bnQpXG4gICAgICBzZXRBbGxEYXRhKHJlc3BvbmNlLnJ1bm5pbmdDb3VudClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2dEYXRhID0gKGUpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZSlcblxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkQ2xpY2soKTtcbiAgICB9KVxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2xpY2tzXCIpXG4gICAgICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZGF0YS5qc29uKClcbiAgICAgICAgbG9nRGF0YShyZXNwb25jZS5ydW5uaW5nQ291bnQpXG4gICAgICAgIHNldEFsbERhdGEocmVzcG9uY2UucnVubmluZ0NvdW50KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICBpZiAoIWFsbERhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH0gZWxzZSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+IFJ1bm5pbmcgQ291bnQgOiB7YWxsRGF0YVswXS5jbGlja19jb3VudH0gPC9wPlxuICAgICAgICA8cD4gTGFzdCBDbGljayA6IHthbGxEYXRhWzBdLnRpbWVzdGFtcH0gPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhbGxEYXRhIiwic2V0QWxsRGF0YSIsImN1cnJlbnRDb3VudCIsIlNldEN1cnJlbnRDb3VudCIsInVwZGF0ZWRBdCIsInNldFVwZGF0ZWRBdCIsImFkZENsaWNrIiwiZGF0YSIsImZldGNoIiwicmVzcG9uY2UiLCJqc29uIiwibG9nRGF0YSIsInJ1bm5pbmdDb3VudCIsImUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2hEYXRhIiwiZGl2IiwicCIsImNsaWNrX2NvdW50IiwidGltZXN0YW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});