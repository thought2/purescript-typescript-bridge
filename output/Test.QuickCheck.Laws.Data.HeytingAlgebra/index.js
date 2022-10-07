// Generated by purs version 0.15.4
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var lift3 = /* #__PURE__ */ Control_Apply.lift3(Test_QuickCheck_Gen.applyGen);
var lift2 = /* #__PURE__ */ Control_Apply.lift2(Test_QuickCheck_Gen.applyGen);
var map = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var checkHeytingAlgebraGen = function (dictHeytingAlgebra) {
    var conj1 = Data_HeytingAlgebra.conj(dictHeytingAlgebra);
    var implies = Data_HeytingAlgebra.implies(dictHeytingAlgebra);
    var tt = Data_HeytingAlgebra.tt(dictHeytingAlgebra);
    var not = Data_HeytingAlgebra.not(dictHeytingAlgebra);
    var ff = Data_HeytingAlgebra.ff(dictHeytingAlgebra);
    var disj = Data_HeytingAlgebra.disj(dictHeytingAlgebra);
    return function (dictEq) {
        var eq = Data_Eq.eq(dictEq);
        return function (gen) {
            var implications = function (a) {
                return function (b) {
                    return eq(conj1(a)(implies(a)(b)))(conj1(a)(b)) && eq(conj1(b)(implies(a)(b)))(b);
                };
            };
            var implicationId = function (a) {
                return eq(implies(a)(a))(tt);
            };
            var identity = function (op) {
                return function (ident) {
                    return function (a) {
                        return eq(op(a)(ident))(a);
                    };
                };
            };
            var idempotent = function (op) {
                return function (a) {
                    return function (v) {
                        return eq(op(a)(a))(a);
                    };
                };
            };
            var distributiveImplication = function (a) {
                return function (b) {
                    return function (c) {
                        return eq(implies(a)(conj1(b)(c)))(conj1(implies(a)(b))(implies(a)(c)));
                    };
                };
            };
            var complemented = function (a) {
                return eq(not(a))(implies(a)(ff));
            };
            var commutativity = function (op) {
                return function (a) {
                    return function (b) {
                        return eq(op(a)(b))(op(b)(a));
                    };
                };
            };
            var associativity = function (op) {
                return function (a) {
                    return function (b) {
                        return function (c) {
                            return eq(op(a)(op(b)(c)))(op(op(a)(b))(c));
                        };
                    };
                };
            };
            var absorption = function (op1) {
                return function (op2) {
                    return function (a) {
                        return function (b) {
                            return eq(op1(a)(op2(a)(b)))(a);
                        };
                    };
                };
            };
            return function __do() {
                Effect_Console.log("Checking 'Associativity of disjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift3(associativity(disj))(gen)(gen)(gen))();
                Effect_Console.log("Checking 'Associativity of conjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift3(associativity(conj1))(gen)(gen)(gen))();
                Effect_Console.log("Checking 'Commutativity of disjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(commutativity(disj))(gen)(gen))();
                Effect_Console.log("Checking 'Commutativity of conjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(commutativity(conj1))(gen)(gen))();
                Effect_Console.log("Checking 'Absorption of disjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(absorption(disj)(conj1))(gen)(gen))();
                Effect_Console.log("Checking 'Absorption of conjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(absorption(conj1)(disj))(gen)(gen))();
                Effect_Console.log("Checking 'Idempotent disjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(idempotent(disj))(gen)(gen))();
                Effect_Console.log("Checking 'Idempotent conjunction' law for HeytingAlgebra")();
                quickCheck$prime(1000)(lift2(idempotent(conj1))(gen)(gen))();
                Effect_Console.log("Checking 'Disjunction identity' law for HeytingAlgebra")();
                quickCheck$prime(1000)(map(identity(disj)(ff))(gen))();
                Effect_Console.log("Checking 'Conjunction identity' law for HeytingAlgebra")();
                quickCheck$prime(1000)(map(identity(conj1)(tt))(gen))();
                Effect_Console.log("Checking 'Implication' laws for HeytingAlgebra")();
                quickCheck$prime(1000)(map(implicationId)(gen))();
                quickCheck$prime(1000)(lift2(implications)(gen)(gen))();
                quickCheck$prime(1000)(lift3(distributiveImplication)(gen)(gen)(gen))();
                Effect_Console.log("Checking 'Complemented' law for HeytingAlgebra")();
                return quickCheck$prime(1000)(map(complemented)(gen))();
            };
        };
    };
};
var checkHeytingAlgebra = function (dictArbitrary) {
    var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
    return function (dictHeytingAlgebra) {
        var checkHeytingAlgebraGen1 = checkHeytingAlgebraGen(dictHeytingAlgebra);
        return function (dictEq) {
            var checkHeytingAlgebraGen2 = checkHeytingAlgebraGen1(dictEq);
            return function (v) {
                return checkHeytingAlgebraGen2(arbitrary);
            };
        };
    };
};
export {
    checkHeytingAlgebra,
    checkHeytingAlgebraGen
};
