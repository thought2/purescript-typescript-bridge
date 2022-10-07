// Generated by purs version 0.15.4
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_DivisionRing from "../Data.DivisionRing/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](Test_QuickCheck.testableBoolean);
var quickCheck$prime1 = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var map = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var checkDivisionRingGen = function (dictDivisionRing) {
    var Semiring0 = (dictDivisionRing.Ring0()).Semiring0();
    var one = Data_Semiring.one(Semiring0);
    var zero = Data_Semiring.zero(Semiring0);
    var mul = Data_Semiring.mul(Semiring0);
    var recip = Data_DivisionRing.recip(dictDivisionRing);
    return function (dictEq) {
        var notEq = Data_Eq.notEq(dictEq);
        var eq = Data_Eq.eq(dictEq);
        return function (gen) {
            var nonZero = notEq((function (dictEq1) {
                return one;
            })(dictEq))(zero);
            var inverse = function (dictDivisionRing1) {
                return function (a) {
                    if (eq(a)(zero)) {
                        return true;
                    };
                    if (eq(mul(recip(a))(a))(mul(a)(recip(a))) && (eq(mul(recip(a))(a))(one) && eq(mul(a)(recip(a)))(one))) {
                        return true;
                    };
                    if (Data_Boolean.otherwise) {
                        return false;
                    };
                    throw new Error("Failed pattern match at Test.QuickCheck.Laws.Data.DivisionRing (line 42, column 3 - line 42, column 42): " + [ a.constructor.name ]);
                };
            };
            var inverse1 = inverse(dictDivisionRing);
            return function __do() {
                Effect_Console.log("Checking 'Non-zero ring' law for DivisionRing")();
                quickCheck$prime(1000)(nonZero)();
                Effect_Console.log("Checking 'Non-zero multiplicative inverse' law for DivisionRing")();
                return quickCheck$prime1(1000)(map(inverse1)(gen))();
            };
        };
    };
};
var checkDivisionRing = function (dictDivisionRing) {
    var checkDivisionRingGen1 = checkDivisionRingGen(dictDivisionRing);
    return function (dictArbitrary) {
        var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
        return function (dictEq) {
            var checkDivisionRingGen2 = checkDivisionRingGen1(dictEq);
            return function (v) {
                return checkDivisionRingGen2(arbitrary);
            };
        };
    };
};
export {
    checkDivisionRing,
    checkDivisionRingGen
};
