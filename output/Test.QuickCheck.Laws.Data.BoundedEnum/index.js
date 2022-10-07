// Generated by purs version 0.15.4
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var eq = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Maybe.eqMaybe(Data_Eq.eqInt));
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var succ = /* #__PURE__ */ Data_Enum.succ(Data_Enum.enumInt);
var pred = /* #__PURE__ */ Data_Enum.pred(Data_Enum.enumInt);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Ordering.eqOrdering);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Maybe.applicativeMaybe);
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](Test_QuickCheck.testableBoolean);
var quickCheck$prime1 = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var map1 = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var lift2 = /* #__PURE__ */ Control_Apply.lift2(Test_QuickCheck_Gen.applyGen);
var checkBoundedEnumGen = function (dictBoundedEnum) {
    var Enum1 = dictBoundedEnum.Enum1();
    var Ord0 = Enum1.Ord0();
    var Eq0 = Ord0.Eq0();
    var eq2 = Data_Eq.eq(Data_Maybe.eqMaybe(Eq0));
    var toEnum = Data_Enum.toEnum(dictBoundedEnum);
    var fromEnum = Data_Enum.fromEnum(dictBoundedEnum);
    var eq3 = Data_Eq.eq(Eq0);
    var Bounded0 = dictBoundedEnum.Bounded0();
    var top = Data_Bounded.top(Bounded0);
    var succ1 = Data_Enum.succ(Enum1);
    var pred1 = Data_Enum.pred(Enum1);
    var bottom = Data_Bounded.bottom(Bounded0);
    var compare1 = Data_Ord.compare(Ord0);
    var cardinality = Data_Enum.cardinality(dictBoundedEnum);
    return function (dictOrd) {
        return function (gen) {
            var tofromenumLaw = function (a) {
                return eq2(toEnum(fromEnum(a)))(new Data_Maybe.Just(a));
            };
            var succpredLaw = function (a) {
                return eq3(a)(top) || eq2(bind(succ1(a))(pred1))(new Data_Maybe.Just(a));
            };
            var predsuccLaw = function (a) {
                return eq3(a)(bottom) || eq2(bind(pred1(a))(succ1))(new Data_Maybe.Just(a));
            };
            var enumsuccLaw = function (a) {
                return eq3(a)(top) || eq(map(fromEnum)(succ1(a)))(succ(fromEnum(a)));
            };
            var enumpredLaw = function (a) {
                return eq3(a)(bottom) || eq(map(fromEnum)(pred1(a)))(pred(fromEnum(a)));
            };
            var compareLaw = function (a) {
                return function (b) {
                    return eq1(compare1(a)(b))(compare(fromEnum(a))(fromEnum(b)));
                };
            };
            var c = unwrap(cardinality);
            var predLaw = eq2(new Data_Maybe.Just(bottom))(Data_Array.foldl(bind)(pure(top))(Data_Array.replicate(c - 1 | 0)(pred1)));
            var succLaw = eq2(new Data_Maybe.Just(top))(Data_Array.foldl(bind)(pure(bottom))(Data_Array.replicate(c - 1 | 0)(succ1)));
            return function __do() {
                Effect_Console.log("Checking 'succ' law for BoundedEnum")();
                quickCheck$prime(1)(succLaw)();
                Effect_Console.log("Checking 'pred' law for BoundedEnum")();
                quickCheck$prime(1)(predLaw)();
                Effect_Console.log("Checking 'predsucc' law for BoundedEnum")();
                quickCheck$prime1(1000)(map1(predsuccLaw)(gen))();
                Effect_Console.log("Checking 'succpred' law for BoundedEnum")();
                quickCheck$prime1(1000)(map1(succpredLaw)(gen))();
                Effect_Console.log("Checking 'enumpred' law for BoundedEnum")();
                quickCheck$prime1(1000)(map1(enumpredLaw)(gen))();
                Effect_Console.log("Checking 'enumsucc' law for BoundedEnum")();
                quickCheck$prime1(1000)(map1(enumsuccLaw)(gen))();
                Effect_Console.log("Checking 'compare' law for BoundedEnum")();
                quickCheck$prime1(1000)(lift2(compareLaw)(gen)(gen))();
                Effect_Console.log("Checking 'tofromenum' law for BoundedEnum")();
                return quickCheck$prime1(1000)(map1(tofromenumLaw)(gen))();
            };
        };
    };
};
var checkBoundedEnum = function (dictArbitrary) {
    var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
    return function (dictBoundedEnum) {
        var checkBoundedEnumGen1 = checkBoundedEnumGen(dictBoundedEnum)((dictBoundedEnum.Enum1()).Ord0());
        return function (dictOrd) {
            return function (v) {
                return checkBoundedEnumGen1(arbitrary);
            };
        };
    };
};
export {
    checkBoundedEnum,
    checkBoundedEnumGen
};
