// Generated by purs version 0.15.4
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Tuple.functorTuple);
var Append = /* #__PURE__ */ (function () {
    function Append(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Append.create = function (value0) {
        return function (value1) {
            return new Append(value0, value1);
        };
    };
    return Append;
})();
var Indent = /* #__PURE__ */ (function () {
    function Indent(value0) {
        this.value0 = value0;
    };
    Indent.create = function (value0) {
        return new Indent(value0);
    };
    return Indent;
})();
var Align = /* #__PURE__ */ (function () {
    function Align(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Align.create = function (value0) {
        return function (value1) {
            return new Align(value0, value1);
        };
    };
    return Align;
})();
var Annotate = /* #__PURE__ */ (function () {
    function Annotate(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Annotate.create = function (value0) {
        return function (value1) {
            return new Annotate(value0, value1);
        };
    };
    return Annotate;
})();
var FlexSelect = /* #__PURE__ */ (function () {
    function FlexSelect(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    FlexSelect.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new FlexSelect(value0, value1, value2);
            };
        };
    };
    return FlexSelect;
})();
var FlexAlt = /* #__PURE__ */ (function () {
    function FlexAlt(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    FlexAlt.create = function (value0) {
        return function (value1) {
            return new FlexAlt(value0, value1);
        };
    };
    return FlexAlt;
})();
var WithPosition = /* #__PURE__ */ (function () {
    function WithPosition(value0) {
        this.value0 = value0;
    };
    WithPosition.create = function (value0) {
        return new WithPosition(value0);
    };
    return WithPosition;
})();
var Local = /* #__PURE__ */ (function () {
    function Local(value0) {
        this.value0 = value0;
    };
    Local.create = function (value0) {
        return new Local(value0);
    };
    return Local;
})();
var Text = /* #__PURE__ */ (function () {
    function Text(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Text.create = function (value0) {
        return function (value1) {
            return new Text(value0, value1);
        };
    };
    return Text;
})();
var Break = /* #__PURE__ */ (function () {
    function Break() {

    };
    Break.value = new Break();
    return Break;
})();
var Empty = /* #__PURE__ */ (function () {
    function Empty() {

    };
    Empty.value = new Empty();
    return Empty;
})();
var notEmpty = function (f) {
    return function (v) {
        if (v instanceof Empty) {
            return Empty.value;
        };
        return f(v);
    };
};
var isEmpty = function (v) {
    if (v instanceof Empty) {
        return true;
    };
    return false;
};
var functorDoc = {
    map: function (f) {
        return function (m) {
            if (m instanceof Append) {
                return new Append(Data_Functor.map(functorDoc)(f)(m.value0), Data_Functor.map(functorDoc)(f)(m.value1));
            };
            if (m instanceof Indent) {
                return new Indent(Data_Functor.map(functorDoc)(f)(m.value0));
            };
            if (m instanceof Align) {
                return new Align(m.value0, Data_Functor.map(functorDoc)(f)(m.value1));
            };
            if (m instanceof Annotate) {
                return new Annotate(f(m.value0), Data_Functor.map(functorDoc)(f)(m.value1));
            };
            if (m instanceof FlexSelect) {
                return new FlexSelect(Data_Functor.map(functorDoc)(f)(m.value0), Data_Functor.map(functorDoc)(f)(m.value1), Data_Functor.map(functorDoc)(f)(m.value2));
            };
            if (m instanceof FlexAlt) {
                return new FlexAlt(Data_Functor.map(functorDoc)(f)(m.value0), Data_Functor.map(functorDoc)(f)(m.value1));
            };
            if (m instanceof WithPosition) {
                return new WithPosition(map(Data_Functor.map(functorDoc)(f))(m.value0));
            };
            if (m instanceof Local) {
                return new Local(map(map1(Data_Functor.map(functorDoc)(f)))(m.value0));
            };
            if (m instanceof Text) {
                return new Text(m.value0, m.value1);
            };
            if (m instanceof Break) {
                return Break.value;
            };
            if (m instanceof Empty) {
                return Empty.value;
            };
            throw new Error("Failed pattern match at Dodo.Internal (line 0, column 0 - line 0, column 0): " + [ m.constructor.name ]);
        };
    }
};
var bothNotEmpty = function (f) {
    return function (v) {
        return function (v1) {
            if (v instanceof Empty) {
                return v1;
            };
            if (v1 instanceof Empty) {
                return v;
            };
            return f(v)(v1);
        };
    };
};
var semigroupDoc = {
    append: /* #__PURE__ */ bothNotEmpty(function (v) {
        return function (v1) {
            if (v instanceof Text && v1 instanceof Text) {
                return new Text(v.value0 + v1.value0 | 0, v.value1 + v1.value1);
            };
            return new Append(v, v1);
        };
    })
};
var monoidDoc = /* #__PURE__ */ (function () {
    return {
        mempty: Empty.value,
        Semigroup0: function () {
            return semigroupDoc;
        }
    };
})();
export {
    Append,
    Indent,
    Align,
    Annotate,
    FlexSelect,
    FlexAlt,
    WithPosition,
    Local,
    Text,
    Break,
    Empty,
    bothNotEmpty,
    notEmpty,
    isEmpty,
    functorDoc,
    semigroupDoc,
    monoidDoc
};