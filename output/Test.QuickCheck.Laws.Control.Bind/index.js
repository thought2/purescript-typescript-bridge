// Generated by purs version 0.15.4
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
import * as Test_QuickCheck_Laws from "../Test.QuickCheck.Laws/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var lift3 = /* #__PURE__ */ Control_Apply.lift3(Test_QuickCheck_Gen.applyGen);
var arbFunction = /* #__PURE__ */ Test_QuickCheck_Arbitrary.arbFunction(Test_QuickCheck_Laws.coarbitraryA);
var checkBindGen = function (dictBind) {
    var bind = Control_Bind.bind(dictBind);
    return function (dictEq) {
        var eq = Data_Eq.eq(dictEq);
        return function (gen) {
            return function (genF) {
                var associativity = function (m) {
                    return function (f) {
                        return function (g) {
                            return eq(bind(bind(m)(f))(g))(bind(m)(function (x) {
                                return bind(f(x))(g);
                            }));
                        };
                    };
                };
                return function __do() {
                    Effect_Console.log("Checking 'Associativity' law for Bind")();
                    return quickCheck$prime(1000)(lift3(associativity)(gen)(genF)(genF))();
                };
            };
        };
    };
};
var checkBind = function (dictBind) {
    var checkBindGen1 = checkBindGen(dictBind);
    return function (dictArbitrary) {
        var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
        var arbitrary1 = Test_QuickCheck_Arbitrary.arbitrary(arbFunction(dictArbitrary));
        return function (dictEq) {
            var checkBindGen2 = checkBindGen1(dictEq);
            return function (v) {
                return checkBindGen2(arbitrary)(arbitrary1);
            };
        };
    };
};
export {
    checkBind,
    checkBindGen
};
