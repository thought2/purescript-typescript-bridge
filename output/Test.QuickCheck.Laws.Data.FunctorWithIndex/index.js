// Generated by purs version 0.15.4
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_FunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
import * as Test_QuickCheck_Laws from "../Test.QuickCheck.Laws/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var map = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var arbFunction = /* #__PURE__ */ Test_QuickCheck_Arbitrary.arbFunction(Test_QuickCheck_Laws.coarbitraryB)(Test_QuickCheck_Laws.arbitraryA);
var arbFunction1 = /* #__PURE__ */ Test_QuickCheck_Arbitrary.arbFunction(Test_QuickCheck_Laws.coarbitraryA)(Test_QuickCheck_Laws.arbitraryB);
var checkFunctorWithIndexGen = function (dictFunctorWithIndex) {
    var mapWithIndex = Data_FunctorWithIndex.mapWithIndex(dictFunctorWithIndex);
    return function (dictCoarbitrary) {
        var arbFunction2 = Test_QuickCheck_Arbitrary.arbFunction(dictCoarbitrary);
        var quickCheck$prime1 = Test_QuickCheck["quickCheck$prime"](Test_QuickCheck.testableGen(Test_QuickCheck.testableFunction(arbFunction2(arbFunction))(Test_QuickCheck.testableFunction(arbFunction2(arbFunction1))(Test_QuickCheck.testableBoolean))));
        return function (dictEq) {
            var eq = Data_Eq.eq(dictEq);
            return function (gen) {
                var identity1 = function (x) {
                    return eq(mapWithIndex(function (v) {
                        return function (a) {
                            return a;
                        };
                    })(x))(x);
                };
                var composition = function (fa) {
                    return function (f) {
                        return function (g) {
                            return eq(mapWithIndex(f)(mapWithIndex(g)(fa)))(mapWithIndex(function (i) {
                                var $35 = f(i);
                                var $36 = g(i);
                                return function ($37) {
                                    return $35($36($37));
                                };
                            })(fa));
                        };
                    };
                };
                return function __do() {
                    Effect_Console.log("Checking 'Identity' law for FunctorWithIndex")();
                    quickCheck$prime(1000)(map(identity1)(gen))();
                    Effect_Console.log("Checking 'Composition' law for FunctorWithIndex")();
                    return quickCheck$prime1(1000)(map(composition)(gen))();
                };
            };
        };
    };
};
var checkFunctorWithIndex = function (dictFunctorWithIndex) {
    var checkFunctorWithIndexGen1 = checkFunctorWithIndexGen(dictFunctorWithIndex);
    return function (dictArbitrary) {
        var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
        return function (dictCoarbitrary) {
            var checkFunctorWithIndexGen2 = checkFunctorWithIndexGen1(dictCoarbitrary);
            return function (dictEq) {
                var checkFunctorWithIndexGen3 = checkFunctorWithIndexGen2(dictEq);
                return function (v) {
                    return checkFunctorWithIndexGen3(arbitrary);
                };
            };
        };
    };
};
export {
    checkFunctorWithIndex,
    checkFunctorWithIndexGen
};
