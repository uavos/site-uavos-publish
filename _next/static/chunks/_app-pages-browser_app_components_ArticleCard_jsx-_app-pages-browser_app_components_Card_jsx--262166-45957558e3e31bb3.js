"use strict";
(self["webpackJsonpNextraApp"] = self["webpackJsonpNextraApp"] || []).push([["_app-pages-browser_app_components_ArticleCard_jsx-_app-pages-browser_app_components_Card_jsx--262166"],{

/***/ "(app-pages-browser)/./app/components/ArticleCard.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ArticleCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/api/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/api/link.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ArticleCard(param) {
    let { title, date, author, description, href, image, children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "article-card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "article-image-wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    src: image,
                    alt: title,
                    fill: true,
                    className: "article-image"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "article-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: href,
                        className: "article-title",
                        children: title
                    }),
                    description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "article-desc",
                        children: description
                    }),
                    author && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "article-author",
                        children: [
                            "By ",
                            author
                        ]
                    }),
                    children && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "article-media",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "article-bottom",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: href,
                                className: "article-link",
                                children: "Read more →"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "article-date",
                                children: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/Card.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/api/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/api/link.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Card(param) {
    let { title, image, href, children } = param;
    let media = null;
    if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(image)) {
        media = image;
    } else if (image && typeof image === "object") {
        media = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: image,
            alt: title || "card image",
            sizes: "(max-width: 768px) 100vw, 33vw",
            priority: false
        });
    } else if (typeof image === "string") {
        media = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: image,
            alt: title || "card image",
            loading: "lazy"
        });
    }
    const CardContent = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "custom-card",
            children: [
                media && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "custom-card-image",
                    children: media
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "custom-card-content",
                    children: [
                        title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                            className: "custom-card-title",
                            children: title
                        }),
                        children
                    ]
                })
            ]
        });
    if (href) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: href,
            className: "custom-card-link",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardContent, {})
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardContent, {});
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/DownloadLinks.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DownloadLinks; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 

function DownloadLinks(param) {
    let { files } = param;
    const basePath = "/site-uavos-publish";
    const isPreviewable = (name)=>/\.(pdf)$/i.test(name);
    const getIcon = (filename)=>{
        const ext = filename.split(".").pop().toLowerCase();
        switch(ext){
            case "pdf":
                return "\uD83D\uDCC4";
            case "zip":
            case "rar":
                return "\uD83D\uDDDC️";
            case "doc":
            case "docx":
                return "\uD83D\uDCD8";
            default:
                return "\uD83D\uDCC1";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "download-links",
        children: files.map((param)=>{
            let { name, path } = param;
            const fileUrl = "".concat(basePath).concat(path.startsWith("/") ? path : "/" + path);
            const icon = getIcon(name);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: fileUrl,
                    target: isPreviewable(name) ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    download: !isPreviewable(name),
                    children: [
                        icon,
                        " ",
                        name
                    ]
                })
            }, name);
        })
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/ModalLink.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ModalLink; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/index.js
var react_dom = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js");
;// CONCATENATED MODULE: ./app/components/Modal.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


let __scrollLocks = 0;
function useLockBodyScroll(active) {
    (0,react.useEffect)(()=>{
        if (!active) return;
        __scrollLocks += 1;
        const body = document.body;
        const html = document.documentElement;
        const prev = {
            overflow: body.style.overflow,
            position: body.style.position,
            top: body.style.top,
            width: body.style.width,
            paddingRight: body.style.paddingRight
        };
        const scrollbar = window.innerWidth - html.clientWidth;
        const scrollY = window.scrollY;
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = "-".concat(scrollY, "px");
        body.style.width = "100%";
        if (scrollbar > 0) body.style.paddingRight = "".concat(scrollbar, "px");
        return ()=>{
            __scrollLocks = Math.max(0, __scrollLocks - 1);
            if (__scrollLocks === 0) {
                body.style.overflow = prev.overflow;
                body.style.position = prev.position;
                body.style.top = prev.top;
                body.style.width = prev.width;
                body.style.paddingRight = prev.paddingRight;
                window.scrollTo(0, scrollY);
            }
        };
    }, [
        active
    ]);
}
function Modal(param) {
    let { open, onClose, ariaLabel = "Dialog", title, children, maxWidth = 960, fit = "media" // "media" | "content"
     } = param;
    useLockBodyScroll(open);
    if (!open) return null;
    const overlay = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": ariaLabel,
        onClick: onClose,
        className: "modal-overlay",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            onClick: (e)=>e.stopPropagation(),
            className: "modal ".concat(fit === "content" ? "modal--content" : ""),
            style: {
                maxWidth
            },
            children: [
                title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "modal-header",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "modal-title",
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onClose,
                    "aria-label": "Close",
                    className: "modal-close",
                    children: "✕"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "modal-body",
                    children: children
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_dom.createPortal)(overlay, document.body);
}

;// CONCATENATED MODULE: ./app/components/ModalLink.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function parseYouTube(url) {
    try {
        const u = new URL(url);
        const host = u.hostname.replace(/^www\./, "");
        let id = null;
        if (host === "youtu.be") id = u.pathname.slice(1);
        if (host === "youtube.com" || host === "m.youtube.com") {
            if (u.pathname.startsWith("/watch")) id = u.searchParams.get("v");
            if (u.pathname.startsWith("/embed/")) id = u.pathname.split("/").pop();
        }
        const t = u.searchParams.get("t") || u.hash.replace("#t=", "");
        const toSec = (t)=>{
            if (!t) return 0;
            if (/^\d+$/.test(t)) return parseInt(t, 10);
            const m = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i.exec(t);
            if (!m) return 0;
            const h = parseInt(m[1] || "0", 10);
            const mnt = parseInt(m[2] || "0", 10);
            const s = parseInt(m[3] || "0", 10);
            return h * 3600 + mnt * 60 + s;
        };
        return {
            id,
            start: toSec(t)
        };
    } catch (e) {
        return {
            id: null,
            start: 0
        };
    }
}
const renderers = {
    video: (param)=>{
        let { href } = param;
        const { id, start } = parseYouTube(href);
        const src = id ? "https://www.youtube.com/embed/".concat(id, "?autoplay=1&rel=0&modestbranding=1&start=").concat(start) : href;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            title: "YouTube video",
            src: src,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true,
            className: "modal-iframe"
        });
    },
    iframe: (param)=>{
        let { href } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            title: "Embedded content",
            src: href,
            allow: "autoplay; fullscreen",
            className: "modal-iframe"
        });
    },
    image: (param)=>{
        let { href, alt } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: href,
            alt: alt || "",
            className: "modal-image"
        });
    },
    gallery: (param)=>{
        let { children } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "modal-gallery",
            children: children
        });
    },
    mdx: (param)=>{
        let { children } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "modal-mdx",
            children: children
        });
    }
};
function ModalLink(param) {
    let { href, type = "video", title, label, children, alt, ariaLabel, ...rest } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const Renderer = renderers[type];
    if (!Renderer) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            className: "gallery-link",
            href: href,
            target: "_blank",
            rel: "noreferrer",
            ...rest,
            children: label || children || title || "Open"
        });
    }
    const triggerContent = label || (type === "gallery" ? title || "Open gallery" : type === "mdx" ? title || "Open content" : children || title || "Open");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                className: "gallery-link",
                href: href || "#",
                onClick: (e)=>{
                    e.preventDefault();
                    setOpen(true);
                },
                ...rest,
                children: triggerContent
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal, {
                open: open,
                onClose: ()=>setOpen(false),
                ariaLabel: ariaLabel || title || "Dialog",
                title: title,
                fit: type === "gallery" || type === "mdx" ? "content" : "media",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
                    href: href,
                    alt: alt,
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/Pagination.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/api/link.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Pagination(param) {
    let { current, pages } = param;
    const prev = pages.find((p)=>p.page === current - 1);
    const next = pages.find((p)=>p.page === current + 1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        "aria-label": "Pagination",
        className: "pagination",
        children: [
            prev ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: prev.href,
                className: "pagination-prev",
                children: "← Prev"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "pagination-prev is-disabled",
                "aria-disabled": "true",
                children: "← Prev"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                className: "pagination-list",
                children: pages.map((p)=>{
                    const isActive = p.page === current;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                        className: "pagination-item",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: p.href,
                            "aria-current": isActive ? "page" : undefined,
                            className: "pagination-link" + (isActive ? " is-active" : ""),
                            children: p.page
                        })
                    }, p.page);
                })
            }),
            next ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: next.href,
                className: "pagination-next",
                children: "Next →"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "pagination-next is-disabled",
                "aria-disabled": "true",
                children: "Next →"
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/ProductGallery.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductGallery; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ProductGallery(param) {
    let { images } = param;
    const imageArray = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(images);
    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "gallery-card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: "Product Visualization"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "gallery",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "main-image",
                        children: imageArray[activeImage]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "thumbs",
                        children: imageArray.map((img, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "thumb ".concat(idx === activeImage ? "active" : ""),
                                onClick: ()=>setActiveImage(idx),
                                children: img
                            }, idx))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/ProductShowcase.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductShowcase; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var _ProductSpecs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(app-pages-browser)/./app/components/ProductSpecs.jsx");
/* harmony import */ var _ProductGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(app-pages-browser)/./app/components/ProductGallery.jsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ProductShowcase(param) {
    let { data } = param;
    const modelKeys = Object.keys(data);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(modelKeys[0]);
    const current = data[selected];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-showcase",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "select-wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", {
                    value: selected,
                    onChange: (e)=>setSelected(e.target.value),
                    className: "select",
                    children: modelKeys.map((key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                            value: key,
                            children: key
                        }, key))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content-grid",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProductSpecs__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        title: "Technical Specifications",
                        table: current.table,
                        price: current.price,
                        downloadLinks: current.downloads
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProductGallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        images: current.images
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/ProductSpecs.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductSpecs; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var _ToggleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./app/components/ToggleBlock.jsx");
/* harmony import */ var _DownloadLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(app-pages-browser)/./app/components/DownloadLinks.jsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ProductSpecs(param) {
    let { title, table, price, downloadLinks } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "specs-card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "table-block",
                dangerouslySetInnerHTML: {
                    __html: table
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "price",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                        children: "Price, USD:"
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "price-value",
                        children: price
                    }),
                    " EXW"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ToggleBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
                title: "Download Manual & Docs",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DownloadLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    files: downloadLinks
                })
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./app/components/RevealOnScrollClient.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ RevealOnScroll; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
;// CONCATENATED MODULE: ./app/components/RevealOnScroll.jsx

function RevealOnScroll(param) {
    let { selector = ".reveal", scopeSelector = "main.home", rootMargin = "0px 0px -12% 0px", threshold = 0.15, once = true, animateOnLoad = true } = param;
    (0,react.useEffect)(()=>{
        var _window_matchMedia, _window_matchMedia1, _window;
        const scope = document.querySelector(scopeSelector) || document.body;
        scope.classList.add("reveal-ready");
        const els = Array.from(scope.querySelectorAll(selector));
        if (!els.length) return;
        const reduceMotion = (_window_matchMedia1 = (_window = window).matchMedia) === null || _window_matchMedia1 === void 0 ? void 0 : (_window_matchMedia = _window_matchMedia1.call(_window, "(prefers-reduced-motion: reduce)")) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches;
        if (reduceMotion) {
            els.forEach((el)=>{
                el.classList.remove("reveal--hidden");
                el.classList.add("reveal--in");
            });
            return;
        }
        els.forEach((el)=>{
            el.classList.remove("reveal--in");
            el.classList.add("reveal--hidden");
            el.style.transitionDelay = "";
        });
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                scope.classList.add("reveal-anim");
            });
        });
        const start = ()=>{
            requestAnimationFrame(()=>{
                const io = new IntersectionObserver((entries)=>{
                    for (const entry of entries){
                        if (!entry.isIntersecting) continue;
                        const el = entry.target;
                        const delay = el.getAttribute("data-reveal-delay");
                        if (delay) el.style.transitionDelay = "".concat(delay, "ms");
                        requestAnimationFrame(()=>{
                            el.classList.remove("reveal--hidden");
                            void el.offsetWidth;
                            el.classList.add("reveal--in");
                        });
                        if (once) io.unobserve(el);
                    }
                }, {
                    root: null,
                    rootMargin,
                    threshold
                });
                els.forEach((el)=>io.observe(el));
            });
        };
        if (animateOnLoad) {
            if (document.readyState === "complete") {
                start();
            } else {
                window.addEventListener("load", start, {
                    once: true
                });
                return ()=>window.removeEventListener("load", start);
            }
        } else {
            start();
        }
    }, [
        selector,
        scopeSelector,
        rootMargin,
        threshold,
        once,
        animateOnLoad
    ]);
    return null;
}

;// CONCATENATED MODULE: ./app/components/RevealOnScrollClient.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


/***/ }),

/***/ "(app-pages-browser)/./app/components/ToggleBlock.jsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToggleBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ToggleBlock(param) {
    let { title, children } = param;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "toggle-block",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "toggle-header",
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "toggle-title",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "toggle-arrow ".concat(open ? "open" : ""),
                        children: "▼"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "toggle-content-wrapper ".concat(open ? "open" : "closed"),
                "aria-hidden": !open,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "toggle-content",
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/AUVSI_CMYK_Member.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/AUVSI_CMYK_Member.e609950d.jpg","height":70,"width":200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKYE/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIDEQAEIv/aAAgBAQABPwCbUgWJWCmyRfTZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AHT/2Q==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/Fiala-Prop-logo-300x174.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Fiala-Prop-logo-300x174.28a04521.png","height":174,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AcjI1QCYmbQgbGtNaBMTDy3z8/EDDg4P2PT0+5wcHBTUAaiou0I5OS2uAgIBD////QDQ0cwAISEiABAPEvvc3OVeAczM1bcZGRBIr7C99f38BQYdHRAABAQH+0JCNwrm5uzXAa2uuj0qKSGv6eroE/79BAALCw4A+/v7ABYWEfjY2OJbAdnZ3gDo6PgbFhcHY/f3+i///gAC+fn71729z59OTzvbqlBN3nF3pyYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/HAPSAllianceLogo-300x91.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/HAPSAllianceLogo-300x91.61fef8ed.png","height":91,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGN0qu2UvHvimjcDw38GFjaWd/9+/ZV+9OXL27+n7r1h+Hv+GKNdWbP43z9/mZmYmf6xMjCz7Lt6/FeuV5IODzuHGzML6wcAUWgeXaBwtboAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/isrtest-225x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/isrtest-225x300.9f18ef6b.jpg","height":300,"width":225,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJ4J/8QAHxAAAQMDBQAAAAAAAAAAAAAAAgEDBAAFBhESEzJh/9oACAEBAAE/AMielXfjQI5mLZ9Nppp7X//EABYRAQEBAAAAAAAAAAAAAAAAACEAAf/aAAgBAgEBPwDAv//EABYRAAMAAAAAAAAAAAAAAAAAAAAhMf/aAAgBAwEBPwCs/9k=","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/isrut_logo_trazado_small.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/isrut_logo_trazado_small.8b7a25b4.png","height":170,"width":286,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoklEQVR42mMIi0qSjrCzDg/38MoL9/GPiLCx8g/3Cy6MsLONidBXkWSIYWAQDJywpMh7y/kS3xWHSn1XH631WX+y3GfDqVzPg/e5GaIYGNQCJy7d7rXnRpH35nNxQIVNXjuuCAJpeZ8Np0UZIqwttEMq2vOBql18Np6pBiraxvT/PyMDFICs4AFaEQ80OgeII/0W77YLya8RDouI5w2un8AMAGMXQAj7bVCuAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/quality-policy-uavos-1.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/quality-policy-uavos-1.bd1a5b20.png","height":168,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAoUlEQVR42hWLTQqCQBhA55xCm6BtG2kVtOkMYYvoZ6MH6BxpgSZmoaUwZYFO840z6uCou/cePMQZKbIXT33nuJ9NxlN9gZq6Ygz+wKSU0eOuaSOklGoaGUVxHD979jwXCSEwfjsX3z5fMf6UZYkIIcEttB3vZLtBEBZ5PoyC8yRJs+8PAHpFlPGqlgyAUtq27ZD0+XJlbA677dowLNO0LLMDhzF6G8QatiIAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/quality-policy-uavos2.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/quality-policy-uavos2.602d551e.png","height":175,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAoklEQVR42gXATA+B0Pdbc7I2N/cc2nIwa8xExdFs1ORRkfShb3oKL89m4+JvGMAXN/f1Kj1k5qLVbNRpGpAyrorogcL3M/++ruKQB+SW4CLamxpcK+Se/T4Y5LFtbBRpKguSCKGKEgfEnqGpM1EeD0bCSp1HngmK1DmHlgGXrr1NA4uUCTjZMPF3kWcEjo7iI0YBqFFUm2V6XY5jGaHfmQj8Hyx5ZjQJstwHAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/about/assets/team-300x200.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/team-300x200.dfec6361.jpg","height":200,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqAP/AP/EAB8QAAEDAwUAAAAAAAAAAAAAAAIBBBIAAwURExUikv/aAAgBAQABPwB1kXPHRblsWtBWI9l9FX//xAAYEQACAwAAAAAAAAAAAAAAAAAAAgERIf/aAAgBAgEBPwBna50//8QAFxEBAAMAAAAAAAAAAAAAAAAAAgARMf/aAAgBAwEBPwAk1k//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/assets/ln-150x42.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ln-150x42.d71d6dd9.png","height":42,"width":150,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nGNkYGCwAmJmIBZj5hV7//fzq88MRgG6HQU5Xa/efxEAKcgEYhYgFmRi52Xj+Pn56zchhz9LlnZX/Pn9WwgAN+oVycIXgioAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/assets/logo.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/logo.78d1510a.png","height":1280,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR42l2OMQoCMRBFI7biDWTBQkGxyTTqMWw8wQzYyTaKtWAtNsktxBPYehZtBSvjG1CLHXgJf+b/SYKXWB6L5gP0o6Uu9wY6wStaHiLOcMH4gAXc0Bp+hbiSLFExaD6JpRl6+jcglqQKgzeGAvW33/Kj7YL0Hp6YXqLpLoRCs/iPr543mqmCHmsjyYp7EDVNYMSz4oYdrGELBiuGrmuxfPwAW51QKKuxrO4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/assets/request.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/request.b878db75.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiElEQVR42m2POw6DMBBEjVMnJ0gZpcinTR1QIkpauAUXt1zY+4GKMRIWIFZ60mhnNPaaNMxcmO3kXRbe+xP0JZH0JhRCSEYHfuAPWuzO67onEb1FtRaRCuaLmB85APMOSgQ/LFJDV+C2/1QDehhfYiqdc3Z5P1+A2qs5mhhjMY7DHFRViya7eBONa2+i0W/WDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/assets/yt-300x70.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/yt-300x70.bf614fc0.png","height":1075,"width":2560,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQEAAFFPPT3Mr7W049qamp0B/P1i+d7d+v/29gb82dncAQIAAIkaGRkP5Ofn681tbVceV1clAAQE/wIHBwH13NwAAQMAACMsFRUj0evr+MpFRWURRkZcAgsK+f/+/wX98PDbFUcuBo1gJmEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/2025-11-04-uavos-composite-curing-oven-for-the-aerospace-indu-1762262906407-960732684.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-04-uavos-composite-curing-oven-for-the-aerospace-indu-1762262906407-960732684.65b57853.jpg","height":576,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKKJf//EABoQAAMBAQEBAAAAAAAAAAAAAAECAwQFADH/2gAIAQEAAT8A6WXdLZLTn6l5oWQPL6hAPv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/Saker1B.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Saker1B.785efd75.png","height":810,"width":588,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAl0lEQVR42hWMvQrCMBSFc9PbJIOBVnGRIIi4ujia93Zx8QcHX0EQdaiIoLQQjNokXg9n+TiHD1ab/elSOeesnU/GQ5knqK63EIJS0r+/Uoiy0MhSpC6Wu+OjLbo9UyrUusM5b+7n9fZgp2Yw6vP4TxIin5lMtc+X/0BdNwDMe08DBQCQkSkxKRViFiJ5EyLm9IoEDIhjTD8z2kmKg8W9pQAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/media-coverage-1762262015497-425210350.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/media-coverage-1762262015497-425210350.ff1c579b.jpg","height":1024,"width":725,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArAP/xAAdEAABAwUBAAAAAAAAAAAAAAAEAgMRAAESE0Ei/9oACAEBAAE/ABhFD7JIccyXdXrk8r//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/media-coverage-1762262028519-369764056.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/media-coverage-1762262028519-369764056.0bb57bc0.jpg","height":1024,"width":725,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApYC//8QAGxAAAQQDAAAAAAAAAAAAAAAAAwABAkETIlH/2gAIAQEAAT8AJMGKG46tuL//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8ArP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwCUf//Z","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/media-coverage-1762262033155-506152237.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/media-coverage-1762262033155-506152237.43b48042.jpg","height":1024,"width":725,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAALAkL//EABsQAAICAwEAAAAAAAAAAAAAAAECAwQAESKx/9oACAEBAAE/AJrdAxxvFbUcjaK5Y+5//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMXH/2gAIAQIBAT8AdyuKT//EABgRAAIDAAAAAAAAAAAAAAAAAAECAFGR/9oACAEDAQE/AA5pcE//2Q==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/assets/uavos-robinson.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uavos-robinson.a3a1ce28.png","height":990,"width":765,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAmUlEQVR42g3MQQrCMBAAwGSTRgiIh1LBW19VfYuC9RX9VEHw1JN4Eu1Bi9XGNsnu6jxgZFkeACDEuN9t79ebYKWKosjzXArxerjTsTHG6mfXee/btm3Ol3H8ev2BZZaZmUnTNFvMFcZEGb3ZrIkohFBV1bvvvZ8AJPwjZjFp24ENSICESMRMCU4rmzCRdM4hIjPXdT0MQ4z4Ay3eV6nXSnfhAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/2025-11-04-validation-of-matrix-heating-uniformity-in-uavos-c-1762246605950-223123942.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-04-validation-of-matrix-heating-uniformity-in-uavos-c-1762246605950-223123942.1330259d.jpg","height":863,"width":1536,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqoP/xAAZEAEBAAMBAAAAAAAAAAAAAAABAgADIiH/2gAIAQEAAT8A2xyBVT0ejn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/Military-Drone-Ecosystem-Diagram.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Military-Drone-Ecosystem-Diagram.c5e49a00.png","height":933,"width":1400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAe0lEQVR42g2LSw6CMBRFu//NOCBqNA5MNEGweaUt/QCPtso/bII3OYN77mEJrVHcG2E1tE4SGyv3JTEJxTk70VRB0XlVK46Nngdkv+B19Z3+WH5erobUu8f9EtGy0Jn8/SRSKnhOX6NhmyMjebtmy9hvUyQ9pFaKch3DAT7eY7nV1bEMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/S1-V300-MALE-UAS.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/S1-V300-MALE-UAS.6f3cb4ed.jpg","height":1068,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtA//xAAdEAABAgcAAAAAAAAAAAAAAAABAiEAAwQGERLC/9oACAEBAAE/AJN11mgZWHYqB5j/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/UAVOS-Aliaksei-Stratsilatau.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-Aliaksei-Stratsilatau.ba08dac9.jpg","height":250,"width":250,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAlgv/xAAdEAABAwUBAAAAAAAAAAAAAAACAQMFAAQSEyJh/9oACAEBAAE/AJOOcOIYErNzYqnzh0Xtf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAjJy/9oACAECAQE/AIK2j//EABgRAAIDAAAAAAAAAAAAAAAAAAABAkJy/9oACAEDAQE/AJ0yj//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/UAVOS-HAPS-aug.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-HAPS-aug.0bdcb944.jpg","height":898,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIEXD//EAB4QAAEBCQAAAAAAAAAAAAAAAAQBAAIDBQYSFCIy/9oACAEBAAE/AAqgJlZD+MIEi83LB2b/xAAZEQABBQAAAAAAAAAAAAAAAAAAAhESIVH/2gAIAQIBAT8ATcn0/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAwEBPwBph//Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ai-report.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ai-report.1e3c0434.png","height":200,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAf0lEQVR42g3HuwrCMBQA0OYm5t3E4mPSQRz6/78jFIdGiEMFEVNtXnq2g0Y/IYC10SHMplUp5xizlJzEZYFakuTj7a6UdP4BqO42FgRn/wPG59Nh/mZ3dRSw0Zo0QAbnBX8yujKa9f1xejX23ZCUYilZcBrCZ7/trFH1MnRt+QEGUDN5TPffNgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249179790-708097357.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249179790-708097357.e81ec7ba.jpg","height":863,"width":1536,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKMKP//EABsQAAICAwEAAAAAAAAAAAAAAAEDAhEABTJh/9oACAEBAAE/ANWsrg8Fk529nZuvM//EABcRAAMBAAAAAAAAAAAAAAAAAAABAiH/2gAIAQIBAT8AvKZ//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMf/aAAgBAwEBPwCcR//Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249957895-19929741.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249957895-19929741.3ddb5ba9.jpg","height":577,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApAP/xAAaEAADAQADAAAAAAAAAAAAAAACAwQBADFB/9oACAEBAAE/AII2TE7TqY3C3o/Of//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249971000-508238536.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762249971000-508238536.7bcb655c.jpg","height":577,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvwf/xAAcEAACAQUBAAAAAAAAAAAAAAACAwEABBESUWH/2gAIAQEAAT8AsnPN6gNslGGbe8r/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250000188-165056718.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250000188-165056718.4c3a6508.jpg","height":574,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAvgP/xAAbEAABBAMAAAAAAAAAAAAAAAACAQMEMQARcf/aAAgBAQABPwCATiyAEnTJNHa33P/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250005620-399704813.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250005620-399704813.89a8bdfa.jpg","height":574,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALwS/wD/xAAdEAABAwUBAAAAAAAAAAAAAAABAgMRAAQSFDFx/9oACAEBAAE/ALIr2GUlxZGTkye+1//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250011326-362688430.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250011326-362688430.a9f74f14.jpg","height":575,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAuAP/xAAdEAABBAIDAAAAAAAAAAAAAAABAgMEEQATIzJh/9oACAEBAAE/AIhc3RgXnDyru1dvDn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250017773-829091779.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250017773-829091779.ff7f0f4e.jpg","height":576,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtQf/xAAbEAACAwADAAAAAAAAAAAAAAACAwEEEQASMv/aAAgBAQABPwCkx0uqiTjLWn22fUc//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/ceo/assets/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250020664-878112126.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ceo2025-11-04-validation-of-matrix-heating-uniform-1762250020664-878112126.d4604e1d.jpg","height":577,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApwT/xAAdEAABAgcAAAAAAAAAAAAAAAASABECAwUVISI0/9oACAEBAAE/ALNTB45OIBcdmX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-04-uavos-ai-software-reduces-inspection-reporting-tim-1762250105595-162387385.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-04-uavos-ai-software-reduces-inspection-reporting-tim-1762250105595-162387385.3b7c5e3e.jpg","height":629,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKkTf//EABwQAAEDBQAAAAAAAAAAAAAAABIRExQAAQIDFv/aAAgBAQABPwCRu6Zl7NucIFdEr//EABcRAAMBAAAAAAAAAAAAAAAAAAADQnL/2gAIAQIBAT8AXWj/xAAXEQADAQAAAAAAAAAAAAAAAAAAAkJx/9oACAEDAQE/AHnD/9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-04-uavos-releases-next-generation-ground-control-stat-1762280913092-595715260.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-04-uavos-releases-next-generation-ground-control-stat-1762280913092-595715260.a5d692d5.jpg","height":658,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArwn/xAAeEAABBAEFAAAAAAAAAAAAAAACAQMFEQAGEiIjQv/aAAgBAQABPwAI+UDUayAtdaEW1tHaHn6rP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-14-stratospheric-aircraft-hidron-by-uavos-and-stratod-1763112428502-102135780.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-14-stratospheric-aircraft-hidron-by-uavos-and-stratod-1763112428502-102135780.c2afe7cb.jpg","height":3296,"width":5336,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKIuH//EABoQAAAHAAAAAAAAAAAAAAAAAAABAgMTMUH/2gAIAQEAAT8AU8cVYP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-14-uavos-apusduo-aircraft-completed-flight-tests-1763110630942-514252110.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-14-uavos-apusduo-aircraft-completed-flight-tests-1763110630942-514252110.a904fab1.jpg","height":913,"width":1466,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAJxO/wD/xAAdEAAABQUAAAAAAAAAAAAAAAAAAQIDBAUGEhOS/9oACAEBAAE/AIlyVE2sdq+h/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARUf/aAAgBAgEBPwC3Wf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCI/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-14-uavos-inc-and-stratodynamics-aviation-inc-pioneer--1763111253158-964947205.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-14-uavos-inc-and-stratodynamics-aviation-inc-pioneer--1763111253158-964947205.f63e6300.jpg","height":1773,"width":1436,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJos/8QAGxAAAgEFAAAAAAAAAAAAAAAAAgMABAUGImL/2gAIAQEAAT8ADArm1YrN9Pr3P//EABkRAAEFAAAAAAAAAAAAAAAAAAIAARRDof/aAAgBAgEBPwCSTVhq/8QAGREAAQUAAAAAAAAAAAAAAAAAAAIRE0Oh/9oACAEDAQE/AIXsXh//2Q==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/2025-11-14-uavos-unmanned-boat-will-assist-in-fuel-and-cargo--1763112255737-907190339.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2025-11-14-uavos-unmanned-boat-will-assist-in-fuel-and-cargo--1763112255737-907190339.0b44a89d.jpg","height":914,"width":1240,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAvCTf/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDETEAFCH/2gAIAQEAAT8A7d3hC8iA7KGy5Y+bxvn/xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8AdP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/Aliaksei.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Aliaksei.00c3cc2c.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ANnAod/HqejStNfCpdzHqurVt+bTs+fTtwDWvZ3ky6rFrpJqST5kTEDSvaHq1bbl0rYAybGTxrGXlnxnwYOBh05NnIpy7dW34s61AMSskZ2UiaaDeNGPjqllY4pyX+bPr9/KsADBpISainigfm22dnKCS0yjh2rmzKnaw6YAwayet6adyLa4toiKgklCnoZ907mc3MKgANXO2s7G1NfQ4MS9za6fq56VoLapq9K7pQDBu87Szd/OytzEwta9us26s8K5s8DAtLggcYFPyrZj1gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/Autopilot-configuration-768x498.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Autopilot-configuration-768x498.501934c5.jpg","height":498,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKoJf//EABwQAAIABwAAAAAAAAAAAAAAAAECAAMREhMhUf/aAAgBAQABPwDIzEzNUtBC8j//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/LUMES-1024x768.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/LUMES-1024x768.cefed21e.jpg","height":768,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAuAo//8QAGxAAAQQDAAAAAAAAAAAAAAAAAQAEBRIhI4H/2gAIAQEAAT8AMi+sduOr/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEEFCEj/9oACAECAQE/AJjmtVP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAxNS/9oACAEDAQE/AIKyf//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/Oven-CONFORMITY-CERTIFICATE-1024x575.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Oven-CONFORMITY-CERTIFICATE-1024x575.b1f63a94.png","height":575,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAASUlEQVR42l3LQQ6AIAxEUe5/UUiI0gEqaFsV053L+S8TxC69pZ2cS8kodbY1VwwOdXQAaspyePnAHiVGSpFA7f+YnXqN+0YDDi8dCFyjd/gWMQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-Aliaksei-Stratsilatau.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-Aliaksei-Stratsilatau.ba08dac9.jpg","height":250,"width":250,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAlgv/xAAdEAABAwUBAAAAAAAAAAAAAAACAQMFAAQSEyJh/9oACAEBAAE/AJOOcOIYErNzYqnzh0Xtf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAjJy/9oACAECAQE/AIK2j//EABgRAAIDAAAAAAAAAAAAAAAAAAABAkJy/9oACAEDAQE/AJ0yj//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-GCS-7-768x512.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-GCS-7-768x512.4d598d1f.jpg","height":512,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApIP/xAAdEAACAgEFAAAAAAAAAAAAAAACAwEEAAYREhMV/9oACAEBAAE/APLdGon3xvtEOkVkjaOBRn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-HAPS-Tracking-ships-768x432.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-HAPS-Tracking-ships-768x432.2979aca7.jpg","height":432,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIC3/8QAHBABAAEEAwAAAAAAAAAAAAAAAgMAAQUGERNC/9oACAEBAAE/AJJWNZSuknPj+1Ln2zX/xAAXEQADAQAAAAAAAAAAAAAAAAAAA0Jy/9oACAECAQE/AGxk/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECAyJx/9oACAEDAQE/AImpbT//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-Main-Landing-Gear-2025-1024x576.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-Main-Landing-Gear-2025-1024x576.28599b1e.jpg","height":576,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKE1/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAEQMjMf/aAAgBAQABPwA52fS4Dqbq+qRP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-Oven-Upgraded--768x511.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-Oven-Upgraded--768x511.089e3904.jpg","height":511,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqwP/xAAdEAABBAIDAAAAAAAAAAAAAAACAQMEEQASFSFR/9oACAEBAAE/ADhDyDMtHnUK+x2XSq8z/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-S1-300-UAS-1024x602.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-S1-300-UAS-1024x602.5d5cda5d.jpg","height":602,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqAf/xAAbEAACAgMBAAAAAAAAAAAAAAABAwIEABEhIv/aAAgBAQABPwBLU1kiuKiJah2Zj6Of/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-blade-press-1024x576.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-blade-press-1024x576.1a563f1e.jpg","height":576,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnAP/xAAbEAABBAMAAAAAAAAAAAAAAAACAAESMRMhMv/aAAgBAQABPwCY4tA3VWv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-blades-2024-09-768x511.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-blades-2024-09-768x511.8807c743.jpg","height":511,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlIP/xAAcEAABAwUAAAAAAAAAAAAAAAACAAEhAxIxQVH/2gAIAQEAAT8AKmIDblyZp5uF/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/UAVOS-main-rotor-blade.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-main-rotor-blade.1cf43728.jpg","height":744,"width":1400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsIP/xAAaEAEAAQUAAAAAAAAAAAAAAAACAAEDEUFx/9oACAEBAAE/AFaKRVc81P/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/VadimTarasov.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/VadimTarasov.69ed4bb0.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42mNAgBxGfx/f2iAf72gQL9TdlQksvLi7nhlEz2qvtd+zePr/uqSw10AuN0jM08aGkeHS2qlgBec3LXa4vGnR/8mFiS+AXCGQmDkDAxPDrp1HmGCW7Jvdda80OuQzA0OEBIg/cd5WRgYQWLnlpOjqvde3zJm+4Ef7xJX/564/+65r1o40BhhYuOl82ro9V/7vOXbj79JtV/4u237tf13fmv8MDNLuDCAwY+WJlrW7Lv3fsPfq71lrzv7vm3/wV2nrkv96FgGNDCAwZdmR1bNWHPo/bfnxP70LDv7PqZ3/p6x9+X/XgMzZAIsaaMdC85daAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/press2025-11-04-uavos-rotor-blades-successfully-pa-1762279745624-810255939.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/press2025-11-04-uavos-rotor-blades-successfully-pa-1762279745624-810255939.4499337e.jpg","height":511,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlIP/xAAcEAABAwUAAAAAAAAAAAAAAAACAAEhAxIxQVH/2gAIAQEAAT8AKmIDblyYZ5uF/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/sitar-press.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/sitar-press.776c798d.jpg","height":2138,"width":4580,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJQK/8QAGxAAAwEAAwEAAAAAAAAAAAAAAQIDEQASITH/2gAIAQEAAT8AjdlrOIVOj6PmEYN8I5//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/solar-powered-2.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/solar-powered-2.b282cecd.jpg","height":825,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKgF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQMCEVEAE//aAAgBAQABPwBsfBUmLJBFXkr3v//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/solar-powered-3-1-768x396.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/solar-powered-3-1-768x396.c5fcb94a.jpg","height":396,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAsAH/xAAcEAACAgIDAAAAAAAAAAAAAAADEQECABIhMUH/2gAIAQEAAT8AMwjuUcy66t9W59z/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/blog/press/assets/uvh-ind-768x495.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvh-ind-768x495.f051d972.jpg","height":495,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAdEAABAgcAAAAAAAAAAAAAAAACAxIAARETIjFx/9oACAEBAAE/ABSaqodwydTGeh5H/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/UVH-ap102-300x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UVH-ap102-300x223.30b15ffa.jpg","height":1181,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAKYg/8QAHhAAAQMEAwAAAAAAAAAAAAAAAgQFEQAUIiMDMkP/2gAIAQEAAT8AsVa90bFtmHHtz2+ZGIZTPav/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBFC/9oACAECAQE/AMexnr2T0Z//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwBC/9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/ap103-conf20-768x451.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ap103-conf20-768x451.fac58bd2.jpg","height":451,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAZEAEAAgMAAAAAAAAAAAAAAAABAAIREmH/2gAIAQEAAT8Aw0b22XjP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/ap103-micro-square-1-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ap103-micro-square-1-300x300.2ba077c8.jpg","height":300,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAALsT0//EAB4QAAIBAwUAAAAAAAAAAAAAAAECBAAREhMhIjGB/9oACAEBAAE/AJEizIw1Ac+LWOQHW3lf/8QAGxEBAAAHAAAAAAAAAAAAAAAAAQACERIiMWH/2gAIAQIBAT8Akqi3Jk64x//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/ap103-micro-square2.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ap103-micro-square2.7435f985.jpg","height":550,"width":550,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAALESP//EABsQAAMAAgMAAAAAAAAAAAAAAAECEQASAwQx/9oACAEBAAE/AB3uJ6ztsWTZjJb6c//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAgEBPwBaf//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPwBU/9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/autopilot-aircraft-1-300x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/autopilot-aircraft-1-300x223.d8a14856.jpg","height":223,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkCv/xAAZEAEAAgMAAAAAAAAAAAAAAAABAAIFEpL/2gAIAQEAAT8AMndWuj1P/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESUf/aAAgBAgEBPwCnp//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCI/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/autopilot-configuration-768x500.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/autopilot-configuration-768x500.a6ab8d47.png","height":500,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEX///////7+/v79/f38/Pz7+/v6+vr5+fn4+Pn4+Pj39/f19fX09PTz8/Py8vLu7+7u7u7o6Ojm5ubl5eXc3NzV1dWqqqmelc0lAAAAL0lEQVR42g3BhwEAEAwEwCeJ6J39R+UObMmH6Bisaqg3fPuuWQCHcTKxogaRFEUfGsgBSHY8lVMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/autopilot-mini-helicopter-768x543.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/autopilot-mini-helicopter-768x543.ce4ebe94.jpg","height":543,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqQT/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRABMhImH/2gAIAQEAAT8AKzysz7AIRQArsWvm/M//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/autopilot-motorboat-300x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/autopilot-motorboat-300x223.e891f240.jpg","height":223,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgBi//8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBAUAERJBYv/aAAgBAQABPwC/hKtPBC/C8rbzrGObdE+df//EABcRAQADAAAAAAAAAAAAAAAAAAEAAlH/2gAIAQIBAT8ALOz/xAAXEQEAAwAAAAAAAAAAAAAAAAACABEx/9oACAEDAQE/AETeT//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/cpu-300x248.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/cpu-300x248.7402e1e9.jpg","height":248,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAlBp//8QAGxABAQABBQAAAAAAAAAAAAAAAQIDAAQFMUH/2gAIAQEAAT8AeQN1jIxuWSqZammLPe5TX//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwADL//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AK//2Q==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/data-proc-pt-micro-300x250.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/data-proc-pt-micro-300x250.c713d607.jpg","height":250,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAK0S/8QAHhAAAQIHAQAAAAAAAAAAAAAAAgMRAAEEEhYjUWL/2gAIAQEAAT8AxehAxB2QuUM2lsM1fXI//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AIj/xAAZEQABBQAAAAAAAAAAAAAAAAABAAIRIjH/2gAIAQMBAT8AbUQMX//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/gps-300x239.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gps-300x239.476a20a2.jpg","height":239,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAALRJ/8QAHxAAAgECBwAAAAAAAAAAAAAAAgMEABIBBQYRJDEz/9oACAEBAAE/AMi0jAfFTOl7PF6S4+I9Hdb6V//EABcRAAMBAAAAAAAAAAAAAAAAAAABAiH/2gAIAQIBAT8Aumnh/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/otu-300x242.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/otu-300x242.3da7e4bf.jpg","height":242,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJwj/8QAHxAAAAMJAAAAAAAAAAAAAAAAAQKCAAMEBREUIzNB/9oACAEBAAE/AIidW5XuLUQTJCnVN//EABcRAQEBAQAAAAAAAAAAAAAAAAIRAAH/2gAIAQIBAT8AAKt5v//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjH/2gAIAQMBAT8Ad0sZ/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/pitot-tube-mini.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pitot-tube-mini.9aa0d9cf.jpg","height":263,"width":645,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAALAmf//EABoQAQABBQAAAAAAAAAAAAAAAAEAAgMEUbL/2gAIAQEAAT8AwwLaG6+2f//EABkRAAEFAAAAAAAAAAAAAAAAAAACBENzsf/aAAgBAgEBPwCVxavT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMnH/2gAIAQMBAT8AVY4j/9k=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/quaduavos-300x220.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/quaduavos-300x220.c63241f9.jpg","height":220,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKJP/8QAHRAAAQQCAwAAAAAAAAAAAAAAAwECBBEAEyORov/aAAgBAQABPwBpZJIqQtmtooyF46pRNeKm+us//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/AFD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/sd3-300x205.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/sd3-300x205.fe560c14.jpg","height":205,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAiAr/AP/EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEETEFIUH/2gAIAQEAAT8AbzDAu6fJeQhrehLBkFyI35qv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIRAP/aAAgBAgEBPwBUU2jf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIRAP/aAAgBAwEBPwAswk3/2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/tandem-300x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/tandem-300x223.a83f2170.jpg","height":223,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAALIUAf/EAB0QAAEEAgMAAAAAAAAAAAAAAAEDBBESAAIFEyH/2gAIAQEAAT8Ad8i7aHZHslSwFgPIz//EABgRAQEAAwAAAAAAAAAAAAAAAAECAAMR/9oACAECAQE/ANUyx1DP/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACAxH/2gAIAQMBAT8A1UvwWf/Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/acs/assets/vtol-ap10-300x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/vtol-ap10-300x223.496b50ca.jpg","height":223,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAogdP/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIEEQAGUv/aAAgBAQABPwA7JKEZXLG65XP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/AK9P/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAwEBPwCVw//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/185-square-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/185-square-1.b6edab70.jpg","height":624,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAKISP//EABsQAAICAwEAAAAAAAAAAAAAAAIRAyEAAQQx/9oACAEBAAE/AJeQJEZvZWKKRUPmf//EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMSIv/aAAgBAgEBPwB6htumE//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ABv/2Q==","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/Borey20-square-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Borey20-square-300x300.3d95368e.jpg","height":777,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALgE/wD/xAAdEAACAQQDAAAAAAAAAAAAAAACAxIABBEiQWGh/9oACAEBAAE/AFrWobgVhGBcd7Z9r//EABgRAQADAQAAAAAAAAAAAAAAAAEAAhGR/9oACAECAQE/ALVKuBhg9n//xAAaEQEBAAIDAAAAAAAAAAAAAAABAgARAxKB/9oACAEDAQE/AOK6uVp29qPB0Z//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/Gimbal_155-2.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Gimbal_155-2.abed7c6f.jpg","height":717,"width":618,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAALBO/wD/xAAcEAACAQUBAAAAAAAAAAAAAAABAgMABBESITL/2gAIAQEAAT8AnsLufhYgIFxMsa++g6htsV//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oACAECAQE/AKDJ/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/PGCS.7ver2sq.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/PGCS.7ver2sq.bd147d82.jpg","height":512,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAjBP/xAAeEAACAQMFAAAAAAAAAAAAAAABAgQDBSEAERIiMv/aAAgBAQABPwCxK06/iHQYxwlU8Ml8oy+sgsDv21//xAAaEQACAgMAAAAAAAAAAAAAAAABAgASITJS/9oACAECAQE/AH3YWbB6M//EABcRAAMBAAAAAAAAAAAAAAAAAAABAiH/2gAIAQMBAT8AnZR//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/SD1-2021-n2-square-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/SD1-2021-n2-square-300x300.d66091a1.jpg","height":537,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALEV/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBQQTABKi/9oACAEBAAE/AKWaG0S13YoGvIkiVS5cBfPbn//EABcRAAMBAAAAAAAAAAAAAAAAAAABIRH/2gAIAQIBAT8AUbyU/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AKz/2Q==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/UAVOS-Blades-140-2021-pr-768x536.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-Blades-140-2021-pr-768x536.dc92e3ab.jpg","height":234,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJ0S/8QAGRAAAQUAAAAAAAAAAAAAAAAAAwAGNXOy/9oACAEBAAE/AGrJArJhf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/UAVOS-parachute-system-0d611f75-e1630571884325-768x750.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-parachute-system-0d611f75-e1630571884325-768x750.66c34e0b.jpg","height":750,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJFQP//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwUSAAQTQmH/2gAIAQEAAT8AlNmPfjLMAnMAJc+1vc//xAAbEQABBAMAAAAAAAAAAAAAAAARAAECAxMhQf/aAAgBAgEBPwCnWRiRPq//xAAbEQAABwEAAAAAAAAAAAAAAAAAAQIDERIhMf/aAAgBAwEBPwB3aHyUj//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/alb-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/alb-square.a61dbadd.jpg","height":695,"width":1168,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALwh/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIRAAMhMQQSIv/aAAgBAQABPwDghDaC9Wi2nmXYwNRk6xgV/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/ann-square-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ann-square-1.39050a25.jpg","height":444,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAI4kf//EAB4QAAICAAcAAAAAAAAAAAAAAAECBBEAAwUSEyEx/9oACAEBAAE/ANHi5DRpD0/LRQNfQCnd5j//xAAaEQACAgMAAAAAAAAAAAAAAAABAwACERNC/9oACAECAQE/ANlyxuT2Z//EABcRAAMBAAAAAAAAAAAAAAAAAAABEXH/2gAIAQMBAT8Aiiw//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/ap101-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ap101-square.2d37d926.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKIjf//EABwQAQABBAMAAAAAAAAAAAAAAAEDAAISIQQTUf/aAAgBAQABPwCWDsCSWLLksIt2O0sE0+Ff/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Ar//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/ap103-micro-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ap103-micro-square.93083746.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAL0T3//EAB0QAQEAAQQDAAAAAAAAAAAAAAECEQADBBITMYH/2gAIAQEAAT8A3+QzcXPkErJQPYPWT5r/xAAbEQEAAAcAAAAAAAAAAAAAAAABAAIREiIxYf/aAAgBAgEBPwCSqLcmTrjH/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/atm-micro-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/atm-micro-square.78499a04.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJwsf//EAB0QAAICAQUAAAAAAAAAAAAAAAECAwQhAAUGElL/2gAIAQEAAT8A2njgavPbe2pkcypFGcKnT3g5Ov/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwA0l//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/data_link-square-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/data_link-square-1.3dda36b8.jpg","height":522,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAALQmv//EABsQAAICAwEAAAAAAAAAAAAAAAECAwQABREU/9oACAEBAAE/ANGz3aRuyFVPoniVE6Aohz//xAAYEQADAQEAAAAAAAAAAAAAAAABAgMAMf/aAAgBAgEBPwCihaOo4Dv/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8AUP/Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/gcs-full-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gcs-full-square.1bc93297.jpg","height":853,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALAm/wD/xAAeEAAABAcAAAAAAAAAAAAAAAABAgMEABITFSEjYf/aAAgBAQABPwC4OivFk6mtI0hQ5kY//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/mini-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/mini-square.d1998692.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAuAk//8QAHxAAAgECBwAAAAAAAAAAAAAAAQIRAAMSEyEiMTJB/9oACAEBAAE/AL7Kj21xrnOkiN0LJ1YDrx7X/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIRIXH/2gAIAQIBAT8Aaow//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/oven-700-2000-mainview-sq.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/oven-700-2000-mainview-sq.3ef65ac4.jpg","height":280,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAoAP/xAAbEAACAgMBAAAAAAAAAAAAAAACAwQRABIhQf/aAAgBAQABPwCechRrWIbCSyZXL1Hvuf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/pgcs4-sq.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pgcs4-sq.f285bd44.jpg","height":658,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALDH/8QAHhAAAgEDBQAAAAAAAAAAAAAAAgMBABETBAUSFFL/2gAIAQEAAT8AXtAFrwFKewIDIrTyx5b+ptaK/8QAGREAAQUAAAAAAAAAAAAAAAAAAAExMkFS/9oACAECAQE/AMvFLP/EABYRAQEBAAAAAAAAAAAAAAAAABEBAP/aAAgBAwEBPwCRXf/Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/ptp140sq-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ptp140sq-1.dd5b97ad.jpg","height":726,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIoQ/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEhExABMh/9oACAEBAAE/AIO+W4gLRUUZDMPTgWYa2dDn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Ar//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/sld4-1-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/sld4-1-300x300.84719ade.jpg","height":300,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAKRM/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgQRAAMTUf/aAAgBAQABPwCVoEaQ8+Mp7al50xZlHQhbCm79NZ//xAAZEQABBQAAAAAAAAAAAAAAAAABAAIRIjH/2gAIAQIBAT8AfQwMX//EABYRAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPwBU/9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/uav170square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uav170square.80a0d3b3.jpg","height":672,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJISf//EAB8QAAIABQUAAAAAAAAAAAAAAAERAAIDBBIFExUxQf/aAAgBAQABPwDm9TlJIuDvGlhl40muo//EABcRAAMBAAAAAAAAAAAAAAAAAAACElH/2gAIAQIBAT8AlcP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/uavos-servo-sd2b-square-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uavos-servo-sd2b-square-300x300.9a316c4f.jpg","height":517,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKUQL//EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAEBRIGIUH/2gAIAQEAAT8A44xuTRam1zBJgLIpGdezDbyv/8QAGxEAAgEFAAAAAAAAAAAAAAAAAhEDAAEEEhP/2gAIAQIBAT8Ax4gl6bi0StX/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRQf/aAAgBAwEBPwC6mY8n/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/uvh-el19square-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvh-el19square-300x300.b5b7e549.jpg","height":300,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJgJ/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDEQQAEhMhYv/aAAgBAQABPwDFy3GJ2zSLySWGdLjBarG6mI86/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEhIlH/2gAIAQIBAT8AdVGs/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/uvh500-2021-sm.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvh500-2021-sm.486f889e.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAiAv/xAAdEAACAQQDAAAAAAAAAAAAAAABAwIABBIxMkGR/9oACAEBAAE/AF2zCtbWGcVsSRyBjmN+Huv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AV2//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/uvhel5-square-300x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel5-square-300x300.abba4aee.jpg","height":902,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKhE/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBAAGEhQhUv/aAAgBAQABPwDUbGc9KrddDUNBTTMJ2NMVlIwM9F5z/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgARMf/aAAgBAgEBPwApVs//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/assets/xservo2-square.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/xservo2-square.beedf56b.jpg","height":560,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAALABe//EABwQAAMAAgMBAAAAAAAAAAAAAAECAxEhAARRYf/aAAgBAQABPwAK6dl6wEkqUKLQpkj5rGvef//EABoRAAEFAQAAAAAAAAAAAAAAAAIAAQMTMUH/2gAIAQIBAT8AvlHC4y//xAAbEQACAQUAAAAAAAAAAAAAAAABBAACESNBQv/aAAgBAwEBPwClNaxx9HZn/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/01UVH-EL-300x134.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/01UVH-EL-300x134.02fd1187.jpg","height":571,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIoT/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIDBAUAEmL/2gAIAQEAAT8AW9PWTMVOpWbRCuD6Yc//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxgf/aAAgBAgEBPwCNaz//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/1uvh25el-300x200.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/1uvh25el-300x200.4c2ec62d.jpg","height":853,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ4Ef//EABsQAAMBAAMBAAAAAAAAAAAAAAECAwQABRIi/9oACAEBAAE/AKd2NgzF8vxPRIyU1ZvDsDX0C3P/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAISUf/aAAgBAgEBPwDJVQ7P/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/3uvh25el-300x292.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/3uvh25el-300x292.abf2c6af.jpg","height":1244,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJQT/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDBAARMv/aAAgBAQABPwDXbNlrfK8pVMy4FJqjEM/rt+f/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8AiP/Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/uvhel1-300x193.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel1-300x193.5d09610a.jpg","height":823,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKEH/8QAHBAAAgICAwAAAAAAAAAAAAAAAQMCBCIyAAUR/9oACAEBAAE/AOnqsuBIDypdOxiuOsxMFmXp2x25/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAMf/aAAgBAgEBPwCKVsXm/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/uvhel2-300x277.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel2-300x277.30b15ffa.jpg","height":1181,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAKYg/8QAHhAAAQMEAwAAAAAAAAAAAAAAAgQFEQAUIiMDMkP/2gAIAQEAAT8AsVa90bFtmHHtz2+ZGIZTPav/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBFC/9oACAECAQE/AMexnr2T0Z//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwBC/9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/uvhel3-224x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel3-224x300.1c298513.jpg","height":1280,"width":954,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIYQf//EABwQAAIBBQEAAAAAAAAAAAAAAAIDAQAREhQxsf/aAAgBAQABPwA9NALFSM4tPD57X//EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAgEBPwCqR3//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwAL/9k=","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/uvhel4-768x325.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel4-768x325.3220950a.jpg","height":542,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAIgm/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAYTAAVS/9oACAEBAAE/AMqdqWRP1dY66UcAcRD1q5//xAAYEQACAwAAAAAAAAAAAAAAAAAAAgMzcf/aAAgBAgEBPwCKtMP/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8AdP/Z","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/products/bvtl/assets/uvhel5-300x212.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uvhel5-300x212.abba4aee.jpg","height":902,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKhE/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBAAGEhQhUv/aAAgBAQABPwDUbGc9KrddDUNBTTMJ2NMVlIwM9F5z/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgARMf/aAAgBAgEBPwApVs//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/cfwuav/assets/albatross-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/albatross-1.3656c792.jpg","height":900,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqBX/xAAZEAACAwEAAAAAAAAAAAAAAAABEQADFDL/2gAIAQEAAT8A09qsBFCf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECElL/2gAIAQIBAT8AvPTP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECElH/2gAIAQMBAT8ArHEf/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/cfwuav/assets/borey-forest.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/borey-forest.105a3ea4.jpg","height":934,"width":1400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAJwSf//EABsQAQAABwAAAAAAAAAAAAAAAAIAAxIUISNB/9oACAEBAAE/AFbKWtGaeqP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADERJS/9oACAECAQE/AGorVmA2wD0Z/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACEVH/2gAIAQMBAT8Aq7WqhqcJ/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/2.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2.2a8c6772.jpg","height":1280,"width":1247,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALAk/wD/xAAdEAACAQQDAAAAAAAAAAAAAAABAgQAAwURITJR/9oACAEBAAE/AFyAmRReXq6qUPo3wa//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/3.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/3.475c5c90.jpg","height":853,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApASf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAhEDBBMA/9oACAEBAAE/ALehyVJhIRzlBim+/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPwBQ/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/4.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/4.d409b9de.jpg","height":852,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKIr/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIDAAQRBRITIcL/2gAIAQEAAT8AW5l09Wkg2DlAdgVz2Mr5r//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AK//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/IMG_7802-768x512.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/IMG_7802-768x512.9a7e7459.jpg","height":512,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAugf/xAAdEAACAgEFAAAAAAAAAAAAAAACAwQFAAEGEkFi/9oACAEBAAE/AKjaUCqlDLS5mrlEYcuzH1n/xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9694-HDR.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9694-HDR.49425526.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALwz/8QAGxAAAQQDAAAAAAAAAAAAAAAAAgABAwQFExT/2gAIAQEAAT8AlzFsLbViaIy42LYQr//EABcRAAMBAAAAAAAAAAAAAAAAAAABIRH/2gAIAQIBAT8AxWH/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwBW/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9707-HDR.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9707-HDR.17c0c752.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIEP/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDBAAGYv/aAAgBAQABPwDZ2iqwg9McqMZqWJ9c/8QAFhEBAQEAAAAAAAAAAAAAAAAAAiEA/9oACAECAQE/AGTJv//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ABb/2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9710.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9710.74d2e06e.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKcTf//EABwQAAICAgMAAAAAAAAAAAAAAAECBAUAAxESQf/aAAgBAQABPwBrMpaJXDSOhgvID8+qc//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPwCEN//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9739-HDR.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9739-HDR.e66d2ee3.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApAP/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEAAUSIlH/2gAIAQEAAT8Apb2xYuJIYYhyaNSoHXzP/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQhIv/aAAgBAgEBPwDI4usVdAMZ/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgAhcf/aAAgBAwEBPwAWDk//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9768.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9768.4f6369c9.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgEH/xAAdEAABAwUBAAAAAAAAAAAAAAACARESAAMEBRRB/9oACAEBAAE/AD3pllqSWGLng8/CSdf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAC/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARcf/aAAgBAwEBPwBUrJ//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9776.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9776.bb03354a.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArAn/xAAbEAACAgMBAAAAAAAAAAAAAAACAxESAAEUQf/aAAgBAQABPwBD1EQpcm48wN3BVm/mf//EABcRAQADAAAAAAAAAAAAAAAAAAEAETH/2gAIAQIBAT8AQvJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/MG_9795-HDR.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/MG_9795-HDR.4f0fd370.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAL4h/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDBAAhMUL/2gAIAQEAAT8AFq1DbdjMWdBGoI167n//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/UV01.468323.07.001_page1-768x676.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UV01.468323.07.001_page1-768x676.e8b14f47.jpg","height":676,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArgP/xAAaEAEAAQUAAAAAAAAAAAAAAAABAgATMUFS/9oACAEBAAE/AGLbwM+dV//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/UV01.468323.07.001_page2-768x904-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UV01.468323.07.001_page2-768x904-1.e200ee87.jpg","height":904,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAXEAEBAQEAAAAAAAAAAAAAAAACAREA/9oACAEBAAE/AFAliV2d/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/customiz.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/customiz.792b08b3.jpg","height":400,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAALhM/8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDEQQA/9oACAEBAAE/AG6rQvzzhWiKRVn0glsXR7//xAAXEQEBAQEAAAAAAAAAAAAAAAABAgBR/9oACAECAQE/AKVJXm//xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AFdP/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/gcs-real.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gcs-real.9892df1a.jpg","height":658,"width":925,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAqAp//8QAGxAAAQQDAAAAAAAAAAAAAAAAAgEDBAUAEVL/2gAIAQEAAT8AqLWddzz1JNpxAUg5HP/EABoRAAEFAQAAAAAAAAAAAAAAAAIAERIiMVH/2gAIAQIBAT8AcpFYt6v/xAAYEQACAwAAAAAAAAAAAAAAAAABEQAikf/aAAgBAwEBPwBBCoyf/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/gcs-sizes.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gcs-sizes.5c173111.png","height":260,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAJUlEQVR42gVAsQ0AIAjr/3+yaqIWLDAQ6JHh2xDZrTyGcul+rgE2bxb9V3S01AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/gcs4-768x768.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gcs4-768x768.e7cd4ded.jpg","height":768,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKYJ/8QAHBAAAgICAwAAAAAAAAAAAAAAAQMEBQITABJh/9oACAEBAAE/AINHbZWuyVFwVFD2EPJG/wA68//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAC//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/pgcs4-drawing-768x750.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pgcs4-drawing-768x750.96b23630.png","height":750,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAASUlEQVR42g3IQQ6AIAwEwP3/z7yY+AIlEo8YFZDS0tU5Dui0pqJwcqiJg34bVQwcRya1g7la2UTQw37G5XqRYlinOf1TpNWn2Qe6XT0t6CKVJwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/pgcs4-drawing2-768x456.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pgcs4-drawing2-768x456.b5f80614.png","height":456,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAANUlEQVR42g3KQQ4AERAEwP7/Kzd7EiEiEkMzmjoXfJGTflCa782y8FcdMXREkzS+hGmvWG4XZ98mk3egM2gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/z_MG_9788.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/z_MG_9788.bd317b96.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAALAn/8QAGxABAAICAwAAAAAAAAAAAAAAAgMEAAEFEUL/2gAIAQEAAT8ApMQ8hRijj0S6szfXpF5//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADIBf//EABgRAAMBAQAAAAAAAAAAAAAAAAECIQBB/9oACAEDAQE/AGdmN5BN/9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/dgcu/assets/zz_MG_9733.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/zz_MG_9733.2ad01a21.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALYg/8QAGxAAAQQDAAAAAAAAAAAAAAAAAgABAwQSMUH/2gAIAQEAAT8AinuuQyPbNw3hxf/EABgRAAIDAAAAAAAAAAAAAAAAAAABESFx/9oACAECAQE/AFU6f//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/AK//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/esd/assets/Liner-Actuator-Uavos-s-768x201.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Liner-Actuator-Uavos-s-768x201.1e3e8028.jpg","height":201,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALwmv//EABoQAAEFAQAAAAAAAAAAAAAAAAMAAQQ1c7L/2gAIAQEAAT8AHYTNB8sv/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIDMXL/2gAIAQIBAT8AjptH/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/esd/assets/Liner-Actuator1-Uavos-s-768x223.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/Liner-Actuator1-Uavos-s-768x223.a9655b55.jpg","height":223,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKhEv//EABkQAQACAwAAAAAAAAAAAAAAAAEAAgQRUv/aAAgBAQABPwCimXXXbP/EABcRAQADAAAAAAAAAAAAAAAAAAIAMnH/2gAIAQIBAT8Adls//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AFD/2Q==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/esd/assets/SD1-mods.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/SD1-mods.c9e0f690.png","height":472,"width":765,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX////+/v79/v/9/f78/f38/Pz6+vv5+v36+vr4+fr4+fn4+Pn2+Pr39/j29/n29/j09fbz9PTy8/Tx8vPx8fHu7u/t7e7s7O3LV9TyAAAAL0lEQVR42gWAhxGAIBAE9xT1TaQn9N8pg1L1/J6BUOL1jf7A8W/eAPZ8uyGwKRNaJJIBY+9vzIwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/fuav/assets/ecu.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ecu.56282a38.jpg","height":276,"width":522,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKKIP//EABsQAAIBBQAAAAAAAAAAAAAAAAIDAAEFBiJS/9oACAEBAAE/AFY9a2OOpqLUup//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMxcv/aAAgBAgEBPwCOnpn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/fuav/assets/pwr170-768x401.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pwr170-768x401.d1bf4924.png","height":401,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAU0lEQVR42i2LSQ7AIAwD+f9L2xJwWAIkKFKpVB98mZkAulsVGTOjZK5PYqC4exhzmWmX8RDfETEmgPfeQURUtTW5LiICZS61n+IHRzm/9JuZufsLxVpbiMYQG2wAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/fuav/assets/temp170-768x376.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/temp170-768x376.cc7938cf.png","height":376,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAIVBMVEX6+vr5+fn4+Pj3+Pj39/f29vf29vb19vb19fb09fb09PYMoKvOAAAAHElEQVR42mMQUoqczuBS2eLCYFWi5MLAJJSoBAAvcgRVP4G1nQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/fuav/assets/torq170-768x367.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/torq170-768x367.0309d20c.png","height":367,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAVElEQVR42g2LQQ7AIAgE/f8f1bZYo2kiLCFwLXvYy8wU3h/Ohp219v08RJQ35yxQZUF4jDFaa1fvvdaERUSY2d1folZrglx2RVUliwgzEyAlAKr6Aw4fV8KwrtqAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/fuav/assets/uav170engine-2png-768x434.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uav170engine-2png-768x434.869fd439.png","height":434,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAW0lEQVR42mOQ5pCXkVFRFoxmPMSgzMXAwKAoqCAnbSan6MQs7i3uJqPHICcrpaWo7sGqJCnmL+kkacAgL60kLWOlJKsupqqszyHFwKDELgsyg9+FSYNDnV2FGQDMCQpF+ST+vwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/hgim/assets/GSG-185-6909a81a.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/GSG-185-6909a81a.ac0af140.png","height":400,"width":255,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAAAAAAUmmrnAAAAMElEQVR42gVAgQkAIAjb/791SVQ6owQHBV62/iDaEORkIW2OC6N8IXYGEV4kdOLUB4++JheOEG+xAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/hgim/assets/gimbal155-drawing-300x279.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gimbal155-drawing-300x279.379def44.png","height":279,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAAAAAAQMlOCAAAARElEQVR42gVAUQqAIAx9979eBJE/hZahEmgzUdcScCEf6Clg7/V5mQRxajGr66ikYt5jB9821y0Ivne2SecfrdnpIJEBapM0M3lTYD0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/hgim/assets/uavos-gimbal-gsg201.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/uavos-gimbal-gsg201.5a394fef.jpg","height":326,"width":567,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApQH/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMSAAUEMXH/2gAIAQEAAT8AbScc7cbKSV3lsHUdVqKgeZ//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8ADL//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAx/9oACAEDAQE/AFWV5v/Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/jpart/assets/blades-close-desc-768x511.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/blades-close-desc-768x511.8807c743.jpg","height":511,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlIP/xAAcEAABAwUAAAAAAAAAAAAAAAACAAEhAxIxQVH/2gAIAQEAAT8AKmIDblyZp5uF/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/jpart/assets/bladesblack-768x432.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/bladesblack-768x432.050faad1.jpg","height":432,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnAP/xAAbEAABBAMAAAAAAAAAAAAAAAACAAESMRMhMv/aAAgBAQABPwCY4tA3VWv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/04c1a8c8-06a8-4587-80d9-8e8dde32c5b6-200x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/04c1a8c8-06a8-4587-80d9-8e8dde32c5b6-200x300.9128fcc0.jpg","height":300,"width":200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgP/xAAcEAABBAMBAAAAAAAAAAAAAAATAQIDEQAFFEL/2gAIAQEAAT8A0kM3fvTnVnWgyK6qrxn/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/0c6df8c4-399a-4318-abd1-af683786357d-e1630323076204-300x241.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/0c6df8c4-399a-4318-abd1-af683786357d-e1630323076204-300x241.90b4fa30.jpg","height":241,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKoDX//EABsQAAEEAwAAAAAAAAAAAAAAAAQCAwUSADIz/9oACAEBAAE/AGQZZEi+SuSsGvmPXXP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRkf/aAAgBAgEBPwCKrT//xAAaEQEBAAIDAAAAAAAAAAAAAAABAgAhAxGx/9oACAEDAQE/AOamqnsNQGgPM//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/854044cd-05a3-4130-8cba-f4ffec57fcdc-300x225.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/854044cd-05a3-4130-8cba-f4ffec57fcdc-300x225.c88b2303.jpg","height":225,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKOCv//EABwQAAICAgMAAAAAAAAAAAAAAAIDAREABQQVIv/aAAgBAQABPwB2o2cclDew8i0jILKpi8//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8AUP/Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/88d36e67-a392-4c82-90a6-645ed2976ca9-300x269.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/88d36e67-a392-4c82-90a6-645ed2976ca9-300x269.f3603d52.jpg","height":269,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKWI/8QAHBAAAQUAAwAAAAAAAAAAAAAAAwECBBITABVy/9oACAEBAAE/ABRH9qc5ZMq265s1WlfPP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/UAVOS-parachute-system-0d611f75-1-768x653.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/UAVOS-parachute-system-0d611f75-1-768x653.eb379e20.jpg","height":653,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJRVD//EABwQAAMAAQUAAAAAAAAAAAAAAAECAxIABBEhMf/aAAgBAQABPwBjAx3BoxWqzymAOjj7zr//xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAIAQIBAT8AFKo3/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/AHC//9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/abbb6f54-4916-4961-9180-6b695a8b77f5-300x225.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/abbb6f54-4916-4961-9180-6b695a8b77f5-300x225.37f91c3d.jpg","height":225,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgP/xAAdEAABAgcAAAAAAAAAAAAAAAADBCEAAQIFEhQV/9oACAEBAAE/AOYvLc9wa/ANBnE7yj//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/ae022419-4b7a-466d-82d5-a4f2a799478e-e1629920797556-300x256.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ae022419-4b7a-466d-82d5-a4f2a799478e-e1629920797556-300x256.d33853cf.jpg","height":256,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAtwP/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAEQUGUf/aAAgBAQABPwCU+ZXsRZ6kQDknT7Vp+az/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8ADL//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8AXb//2Q==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/bd1a2f98-dcdb-40ae-be2b-7ae4dd9c7aa4-e1629920815737-300x273.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/bd1a2f98-dcdb-40ae-be2b-7ae4dd9c7aa4-e1629920815737-300x273.b5f59852.jpg","height":273,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvgf/xAAdEAACAQQDAAAAAAAAAAAAAAABAhEDBAUhAAYS/9oACAEBAAE/AHscwe0UbqYx6KHhax2fJG15/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/dec5b0b8-e98b-4a90-ab2b-9bfb113bd0b1-e1629920768501-300x288.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/dec5b0b8-e98b-4a90-ab2b-9bfb113bd0b1-e1629920768501-300x288.2f97d29f.jpg","height":288,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAuAf/xAAdEAABAgcAAAAAAAAAAAAAAAASExYAAgMEFFVi/9oACAEBAAE/AKztcFprMmYkwBPuP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/ers751-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ers751-1.b93a54e4.jpg","height":577,"width":828,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJAdv//EABwQAQACAQUAAAAAAAAAAAAAAAIBBBEAAwUTIf/aAAgBAQABPwAcnRk2uqrIIr7JXkZUqMa//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8AW//EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMSMUGx/9oACAEDAQE/AIWiuBri/9k=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/ers752.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ers752.25bb83e6.jpg","height":570,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAogf/xAAcEAADAAEFAAAAAAAAAAAAAAABAgQRAAMFIbH/2gAIAQEAAT8At3uQisag0B5koGU7DY81/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ "(app-pages-browser)/./content/products/kdps/assets/ers753.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/ers753.6a889511.jpg","height":487,"width":564,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKgJv//EABsQAAEEAwAAAAAAAAAAAAAAAAMBBBESAAIi/9oACAEBAAE/AHDy4yhQSztxNs//xAAXEQADAQAAAAAAAAAAAAAAAAAAASFB/9oACAECAQE/AK9P/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/2a289d6c-cac1-4c9c-8b69-bba0350b7694-1-768x512.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/2a289d6c-cac1-4c9c-8b69-bba0350b7694-1-768x512.00c4555a.jpg","height":512,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKyI/8QAHhAAAAQHAAAAAAAAAAAAAAAAAAESFAMEESIjMZH/2gAIAQEAAT8AOVzuHEeu0Ls4P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-1000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-1000ext.c220a1ae.png","height":636,"width":1108,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAMElEQVR42g3BiQkAIAwDwOy/qiDaKoX00zukL73zNEoZkVOQu78zUNdI7oGkiKj5A2aPJqGgDOO9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-1000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-1000int.b3542177.png","height":642,"width":1179,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX////+/v77+/v4+Pj39/f29vb19fXz8/Py8vLx8fHw8PDu7u7t7Ozr6+vq6urp6enk5OQMTO03AAAAJ0lEQVR42gVAgREAEAj8CtWH7D+tg0wnqYrR3P4KsI70ewDJWF6GDxEYAO1lruS3AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-1500ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-1500ext.d74cae18.png","height":604,"width":1283,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAKklEQVR42g3BwREAIAgDsO6/qz48pUDh1AS1zQ4XEbxfT5RLqRzocJ4MPS9GHxdTKpiHAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-1500int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-1500int.21ee6666.png","height":665,"width":1322,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAT0lEQVR42iWMSQrAMAwD/f9/5pQQt85uG1OR6iAkGIYiQlX33nPOMQbGWsvd6ZyTc661vjcPc0oJBAFn5ibSbnrvpRQRIaggwUf/Nmwz+wDvDFutkeWE3AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-2000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-2000ext.e3833cb2.png","height":604,"width":1207,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAK0lEQVR42g3BiQkAIAwDwO4/qwjikyZR1LvAwJxoGf3cb9dIWjJLmFyQ/AAuIR8MiK0+6QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-2000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-2000int.2ee46ccb.png","height":616,"width":1331,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX9/f38/Pz6+vr5+fn29vb19fX09PTz9PTz8/Py8/Pz8vLy8vLw8PDw7u7r6+vq6url5eWnmN4zAAAAJ0lEQVR42gVAARIAEAhbVMaE/7/WAZHUoMFvTdVr6HtRPA4kI5j2ARFkAO9cr1SVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-4000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-4000ext.b1affac2.png","height":383,"width":1629,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAG0lEQVR42gWAMQ0AAAzC8C+Y0O5ZMo5pAzrtA4wkD5DO5rKDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-500-4000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-500-4000int.6c7ffb31.png","height":422,"width":1729,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAL0lEQVR42j3IsQ0AMAgDQfZfldgChCzKUNH9n0mqqu7OzIuZsR0CEQGA5Opzl/QBcLEtS4b69S8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-1000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-1000ext.0103a384.png","height":668,"width":1142,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAMElEQVR42g3BCQ4AEAwEwP3/V8UReohmlRnc3ZfUleAkmUUQM7/RQBV36wM8purBB2WJJqYkmie+AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-1000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-1000int.45317b1b.png","height":688,"width":1155,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX////9/f38/Pz7+/v6+vr5+fn4+Pj39/f29vb29fX19fX09PTy8vLx8fHx8PDw8PDv8PDt7e3s7Ozq6urp6enm5ubl5eXh4eEQRphLAAAAL0lEQVR42gVAhREAIAh8xMBWrP039QByIsEwSHXN8xh2pxbzZZg1+9DjASnBV6EPIzgBoZ3RhF8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-1500ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-1500ext.bf2e24ca.png","height":562,"width":1237,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAKUlEQVR42g3BgQkAIAgEwN9/16BIzUclvUOpqNghwv7IjfQcsVB8dulsL2gfFbMgLI4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-1500int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-1500int.93651bc9.png","height":592,"width":1301,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEX////+/v77+/v6+vr4+Pj3+Pj39/f29vb19fX09PTz8/Py8vLx8fHw8PDu7e3t7Ozr6+vj4+MtEE6wAAAAJ0lEQVR42gVAgREAEAh8lSiP7L+sA9TG7KaQuuR5DtkZGeVowUwu+RF9AQ9b8pzZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-2000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-2000ext.d200adbd.png","height":571,"width":1230,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAKklEQVR42g3BwQ0AIAgDwO4/qz5MAKmFqHdod7dYCcX9eqAoqTTRzG3keS8tHxX5C+fAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-2000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-2000int.ed527ab7.png","height":598,"width":1284,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAASklEQVR42jWMMQ4AIAgD+f9DHWAggkBMlNjFTr30Urr3VlVWrbUiIjOBe29yd2aequZucwrzGOOcQ1BU1X/MTERwQxjB8YMOtbsf39ZbjDugEw4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-2000ws-768x320.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-2000ws-768x320.5ef6d43c.jpg","height":320,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKUGP//EABgQAQEAAwAAAAAAAAAAAAAAAAECABEx/9oACAEBAAE/AIqpdC8z/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-4000ext.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-4000ext.ccf8763a.png","height":435,"width":1712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAGklEQVR42mP48fPXj++/fn5l+AUEP3/9/gEAi/wPkXZNBXMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/OVEN-700-4000int.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/OVEN-700-4000int.617de5fe.png","height":486,"width":1804,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAALklEQVR42iXJuQ0AQAgDQfovFmwQQs7uIZvVWncnWVUE+AFgZuzqdSYidoS7pANwUC1yQ9MengAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/oven-700-2000-mainview-768x716.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/oven-700-2000-mainview-768x716.defc66e2.jpg","height":716,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApwP/xAAbEAABBQEBAAAAAAAAAAAAAAABAgMEERIAFP/aAAgBAQABPwB/2omNNRycKOibFhN9/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ "(app-pages-browser)/./content/products/lme/assets/oven-700-2000-side2-289x300.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/oven-700-2000-side2-289x300.5b7fe37b.jpg","height":300,"width":289,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqAf/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMABCNBYf/aAAgBAQABPwCQ2q240pUBwGCe9nP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/agric-1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/agric-1.a4cc72f0.jpg","height":528,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApDD/AP/EABoQAAICAwAAAAAAAAAAAAAAAAEEAgMAEZL/2gAIAQEAAT8Am64KZaau7Of/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/building.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/building.f73c8eb0.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXklEQVR42g3DsQrCMBRA0TP1X5y7dYmb4BCioVojChZdsqjf48/6OPfCoLuFboBkNFvCbJT4eCjOoVh9aQ6yGrKiUZxU91Dip2hSXUNVXHiZJLuwtXqz2Giyo73u9wf72hQTu2x1rwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/forestry2.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/forestry2.f77e6858.jpg","height":419,"width":1400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALgT/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQQAAxQyM1L/2gAIAQEAAT8ADLNnvq49Gf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/gasoil3.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/gasoil3.e9c97120.jpg","height":565,"width":1546,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAqBZ//8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDBACR/9oACAEBAAE/AL6LCuZRRgGZgfO//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAUf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/land.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/land.ec3f49b5.jpg","height":430,"width":1759,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAuBYz/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIABBEiMcH/2gAIAQEAAT8ArVW4xG+Gf//EABYRAAMAAAAAAAAAAAAAAAAAAAADMv/aAAgBAgEBPwBUn//EABYRAAMAAAAAAAAAAAAAAAAAAAADMv/aAAgBAwEBPwBtH//Z","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/mapping.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/mapping.4589512a.jpg","height":577,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAtAk//8QAGRABAQEAAwAAAAAAAAAAAAAAAgEDAAQR/9oACAEBAAE/AOu3qY2rV5pOf//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPwCosd//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDESH/2gAIAQMBAT8AwA1dg9n/2Q==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/multicam.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/multicam.7664e60f.jpg","height":750,"width":750,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApwP/xAAfEAABAwMFAAAAAAAAAAAAAAADAQIEABIhESIyQaH/2gAIAQEAAT8AGyYOQzY9RoPCuS83POvVvtf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/publicuse3.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/publicuse3.2bca7a12.jpg","height":501,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsgW//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDIQAREmH/2gAIAQEAAT8AMcbqhZFPQuvN5//EABcRAQEBAQAAAAAAAAAAAAAAAAECACH/2gAIAQIBAT8AmRBQeb//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/pump-jack.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/pump-jack.cd74abfe.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42g3HsQoBYQDA8d+nDEbKJCWlLJSdbpCsjIoUZWDRbSYGXd0r3ENc9wz3APdM9/XvP/wI6MRYeEkgQrB0c7UlYOTo6WwspYu9v5UcPRhYe5ip9WHo4uftoDGFr43EyUdpDqksvlOo3E1aMmMP1J8O6XsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/route.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/route.4800175c.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42g3HqwrCUAAA0PMRFqMG48qUidFi3ooPECamBd+OIRYRxTpYUT/Br/Ry0iE2MjQw8VDpk4t8XTVONt5cdKzsLMzc1HxCjwqVu6mSpUyuLVPoGhPbeplL7bXEQtZqpbNncOAn1Sj0RBLJH136GCw+vohvAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/rx1.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/rx1.201ed7eb.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAIoL/8QAGxABAAICAwAAAAAAAAAAAAAAAgMRABIBIXH/2gAIAQEAAT8AWrfMbBpy0q62vzP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/trees.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/trees.0e9a2d37.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42g3DsQoBYQAA4C9GG0/gDaQcZTJdynzuBgPd/YNyJuU2hTKQxeABPIBHvL+vj1Sp0EPfTiCTqmM6VnLGto5OhiYSCBa+UWEpM+Dq6e6nctYYMXcxtdH10kCtkselg7WEv5uPvbdg5tECGjgVssLW7YYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/wheat.jpg":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/wheat.de5dfa3d.jpg","height":150,"width":150,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAjwP/xAAYEAEAAwEAAAAAAAAAAAAAAAABAAIhMf/aAAgBAQABPwBsr3J//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ "(app-pages-browser)/./content/services/assets/worker.png":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/site-uavos-publish//_next/static/media/worker.998fbb5b.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42g3EOQrCQABA0XcHD5BCsBdcEBUEg1HEQohkKxTGQggMiKUHsPDSGT7/8dCIrk6Och0rUZCpPRUOLH3sjJS2KjlrvbtGYa62oRe0bjJcvPj7ium3kPxROCvtjVMzLTDVWZjIVQNG0RNIF+7dHAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ })

}]);