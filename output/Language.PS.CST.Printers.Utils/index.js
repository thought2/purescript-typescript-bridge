// Generated by purs version 0.15.4
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Array_NonEmpty_Internal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_String_Regex from "../Data.String.Regex/index.js";
import * as Data_String_Regex_Flags from "../Data.String.Regex.Flags/index.js";
import * as Data_String_Regex_Unsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Dodo from "../Dodo/index.js";
import * as Dodo_Internal from "../Dodo.Internal/index.js";
import * as Language_PS_CST_ReservedNames from "../Language.PS.CST.ReservedNames/index.js";
import * as Language_PS_CST_Types_Declaration from "../Language.PS.CST.Types.Declaration/index.js";
import * as Language_PS_CST_Types_Leafs from "../Language.PS.CST.Types.Leafs/index.js";
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var mempty = /* #__PURE__ */ Data_Monoid.mempty(Dodo_Internal.monoidDoc);
var eq = /* #__PURE__ */ Data_Eq.eq(Language_PS_CST_Types_Leafs.eqIdent);
var append = /* #__PURE__ */ Data_Semigroup.append(Dodo_Internal.semigroupDoc);
var foldWithSeparator = /* #__PURE__ */ Dodo.foldWithSeparator(Data_Array_NonEmpty_Internal.foldableNonEmptyArray);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var map = /* #__PURE__ */ Data_Functor.map(Data_Array_NonEmpty_Internal.functorNonEmptyArray);
var unwrapText = function () {
    return function ($84) {
        return Dodo.text(Language_PS_CST_ReservedNames.appendUnderscoreIfReserved(unwrap($84)));
    };
};
var unquotedLabelRegex = /* #__PURE__ */ Data_String_Regex_Unsafe.unsafeRegex("^[a-z][A-Za-z0-9_]*$")(Data_String_Regex_Flags.noFlags);
var softSpace = /* #__PURE__ */ Dodo.flexAlt(mempty)(Dodo.space);
var shouldBeNoNewlineBetweenLetBindings = function (v) {
    return function (v1) {
        if (v instanceof Language_PS_CST_Types_Declaration.LetBindingSignature && v1 instanceof Language_PS_CST_Types_Declaration.LetBindingName) {
            return eq(v.value0.ident)(v1.value0.name);
        };
        if (v instanceof Language_PS_CST_Types_Declaration.LetBindingName && v1 instanceof Language_PS_CST_Types_Declaration.LetBindingName) {
            return eq(v.value0.name)(v1.value0.name);
        };
        return false;
    };
};
var shouldBeNoNewlineBetweenInstanceBindings = function (v) {
    return function (v1) {
        if (v instanceof Language_PS_CST_Types_Declaration.InstanceBindingSignature && v1 instanceof Language_PS_CST_Types_Declaration.InstanceBindingName) {
            return eq(v.value0.ident)(v1.value0.name);
        };
        if (v instanceof Language_PS_CST_Types_Declaration.InstanceBindingName && v1 instanceof Language_PS_CST_Types_Declaration.InstanceBindingName) {
            return eq(v.value0.name)(v1.value0.name);
        };
        return false;
    };
};
var shouldBeNoNewlineBetweenDeclarations = function (v) {
    return function (v1) {
        if (v instanceof Language_PS_CST_Types_Declaration.DeclSignature && v1 instanceof Language_PS_CST_Types_Declaration.DeclValue) {
            return eq(v.value0.ident)(v1.value0.valueBindingFields.name);
        };
        if (v instanceof Language_PS_CST_Types_Declaration.DeclValue && v1 instanceof Language_PS_CST_Types_Declaration.DeclValue) {
            return eq(v.value0.valueBindingFields.name)(v1.value0.valueBindingFields.name);
        };
        return false;
    };
};
var rparen = /* #__PURE__ */ Dodo.text(")");
var pursParensWithoutGroup = /* #__PURE__ */ (function () {
    var open = Dodo.flexAlt(Dodo.text("("))(Dodo.text("( "));
    var close = Dodo.flexAlt(Dodo.text(")"))(append(Dodo["break"])(Dodo.text(")")));
    return Dodo.encloseEmptyAlt(open)(close)(Dodo.text("()"));
})();
var printSpaceSeparated = function (apps) {
    var sep = Dodo.flexAlt(Dodo.space)(append(Dodo["break"])(Dodo.text("   ")));
    return foldWithSeparator(sep)(apps);
};
var printLabelled = function (lbl) {
    return function (ann) {
        return append(lbl)(append(Dodo.spaceBreak)(Dodo.indent(Dodo.appendSpace(Dodo.text("::"))(ann))));
    };
};
var printLabelledGroup = function (lbl) {
    return function (ann) {
        return Dodo.flexGroup(printLabelled(lbl)(ann));
    };
};
var printConstructors = /* #__PURE__ */ (function () {
    var $85 = Dodo.foldWithSeparator(Data_Foldable.foldableArray)(Dodo.text(", "));
    var $86 = Data_Functor.map(Data_Functor.functorArray)(function ($88) {
        return Dodo.text(unwrap($88));
    });
    return function ($87) {
        return $85($86($87));
    };
})();
var lparen = /* #__PURE__ */ Dodo.text("(");
var parens = /* #__PURE__ */ Dodo.enclose(lparen)(rparen);
var maybeWrapInParentheses = function (b) {
    if (b) {
        return parens;
    };
    return identity;
};
var labelNeedsQuotes = function (v) {
    return Language_PS_CST_ReservedNames.isReservedName(v) || !Data_String_Regex.test(unquotedLabelRegex)(v);
};
var foldWithPrev = function (v) {
    return function (default$prime) {
        return function (v1) {
            if (v1 instanceof Data_List_Types.Nil) {
                return default$prime;
            };
            var foo = function ($copy_acc) {
                return function ($copy_v2) {
                    return function ($copy_v3) {
                        var $tco_var_acc = $copy_acc;
                        var $tco_var_v2 = $copy_v2;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(acc, v2, v3) {
                            if (v3 instanceof Data_List_Types.Nil) {
                                $tco_done = true;
                                return acc;
                            };
                            if (v3 instanceof Data_List_Types.Cons) {
                                $tco_var_acc = v(acc)(v2)(v3.value0);
                                $tco_var_v2 = new Data_Maybe.Just(v3.value0);
                                $copy_v3 = v3.value1;
                                return;
                            };
                            throw new Error("Failed pattern match at Language.PS.CST.Printers.Utils (line 65, column 11 - line 65, column 37): " + [ acc.constructor.name, v2.constructor.name, v3.constructor.name ]);
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_acc, $tco_var_v2, $copy_v3);
                        };
                        return $tco_result;
                    };
                };
            };
            return foo(default$prime)(Data_Maybe.Nothing.value)(v1);
        };
    };
};
var printAndConditionallyAddNewlinesBetween = function (dictFoldable) {
    var fromFoldable = Data_List.fromFoldable(dictFoldable);
    return function (shouldBeNoNewlines) {
        return function (print) {
            var foldDeclaration = function (accum) {
                return function (v) {
                    return function (current) {
                        if (v instanceof Data_Maybe.Nothing) {
                            return print(current);
                        };
                        if (v instanceof Data_Maybe.Just) {
                            var $76 = shouldBeNoNewlines(v.value0)(current);
                            if ($76) {
                                return append(accum)(append(Dodo.softBreak)(print(current)));
                            };
                            return append(accum)(append(Dodo.softBreak)(append(Dodo["break"])(print(current))));
                        };
                        throw new Error("Failed pattern match at Language.PS.CST.Printers.Utils (line 74, column 5 - line 74, column 60): " + [ accum.constructor.name, v.constructor.name, current.constructor.name ]);
                    };
                };
            };
            var $89 = foldWithPrev(foldDeclaration)(mempty);
            return function ($90) {
                return $89(fromFoldable($90));
            };
        };
    };
};
var exprShouldBeOnNextLine = function (v) {
    if (v instanceof Language_PS_CST_Types_Declaration.ExprLet) {
        return true;
    };
    if (v instanceof Language_PS_CST_Types_Declaration.ExprCase) {
        return true;
    };
    if (v instanceof Language_PS_CST_Types_Declaration.ExprIf) {
        return true;
    };
    return false;
};
var dquote = /* #__PURE__ */ Dodo.text("\"");
var dquotes = /* #__PURE__ */ Dodo.enclose(dquote)(dquote);
var dquotesIf = function (v) {
    if (v) {
        return dquotes;
    };
    if (!v) {
        return identity;
    };
    throw new Error("Failed pattern match at Language.PS.CST.Printers.Utils (line 25, column 1 - line 25, column 49): " + [ v.constructor.name ]);
};
var dot = /* #__PURE__ */ Dodo.text(".");
var printModuleName = function (v) {
    return foldWithSeparator(dot)(map(function ($91) {
        return Dodo.text(unwrap($91));
    })(v));
};
var appendSpaceBreakNoGroup = /* #__PURE__ */ Dodo_Internal.bothNotEmpty(function (a) {
    return function (b) {
        return append(a)(append(Dodo.spaceBreak)(b));
    };
});
export {
    dquotes,
    dquotesIf,
    dquote,
    parens,
    lparen,
    rparen,
    dot,
    pursParensWithoutGroup,
    printModuleName,
    printConstructors,
    foldWithPrev,
    maybeWrapInParentheses,
    printAndConditionallyAddNewlinesBetween,
    shouldBeNoNewlineBetweenDeclarations,
    shouldBeNoNewlineBetweenLetBindings,
    shouldBeNoNewlineBetweenInstanceBindings,
    exprShouldBeOnNextLine,
    labelNeedsQuotes,
    unquotedLabelRegex,
    unwrapText,
    softSpace,
    printSpaceSeparated,
    printLabelled,
    printLabelledGroup,
    appendSpaceBreakNoGroup
};