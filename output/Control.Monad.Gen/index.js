// Generated by purs version 0.15.4
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid_Additive from "../Data.Monoid.Additive/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup_Foldable from "../Data.Semigroup.Foldable/index.js";
import * as Data_Semigroup_Last from "../Data.Semigroup.Last/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var un = /* #__PURE__ */ Data_Newtype.un();
var alaF = /* #__PURE__ */ Data_Newtype.alaF()()()();
var monoidAdditive = /* #__PURE__ */ Data_Monoid_Additive.monoidAdditive(Data_Semiring.semiringNumber);
var Cons = /* #__PURE__ */ (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var Nil = /* #__PURE__ */ (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var FreqSemigroup = function (x) {
    return x;
};
var unfoldable = function (dictMonadRec) {
    var tailRecM = Control_Monad_Rec_Class.tailRecM(dictMonadRec);
    return function (dictMonadGen) {
        var Monad0 = dictMonadGen.Monad0();
        var pure = Control_Applicative.pure(Monad0.Applicative0());
        var Bind1 = Monad0.Bind1();
        var bind = Control_Bind.bind(Bind1);
        var map = Data_Functor.map((Bind1.Apply0()).Functor0());
        var sized = Control_Monad_Gen_Class.sized(dictMonadGen);
        return function (dictUnfoldable) {
            var unfoldr = Data_Unfoldable.unfoldr(dictUnfoldable);
            return function (gen) {
                var unfold = function (v) {
                    if (v instanceof Nil) {
                        return Data_Maybe.Nothing.value;
                    };
                    if (v instanceof Cons) {
                        return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, v.value1));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Gen (line 102, column 12 - line 104, column 35): " + [ v.constructor.name ]);
                };
                var loopGen = function (v) {
                    if (v.value1 <= 0) {
                        return pure(new Control_Monad_Rec_Class.Done(v.value0));
                    };
                    if (Data_Boolean.otherwise) {
                        return bind(gen)(function (x) {
                            return pure(new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(new Cons(x, v.value0), v.value1 - 1 | 0)));
                        });
                    };
                    throw new Error("Failed pattern match at Control.Monad.Gen (line 94, column 3 - line 94, column 68): " + [ v.constructor.name ]);
                };
                return map(unfoldr(unfold))(sized((function () {
                    var $126 = tailRecM(loopGen);
                    var $127 = Data_Tuple.Tuple.create(Nil.value);
                    return function ($128) {
                        return $126($127($128));
                    };
                })()));
            };
        };
    };
};
var semigroupFreqSemigroup = {
    append: function (v) {
        return function (v1) {
            return function (pos) {
                var v2 = v(pos);
                if (v2.value0 instanceof Data_Maybe.Just) {
                    return v1(v2.value0.value0);
                };
                return v2;
            };
        };
    }
};
var getFreqVal = function (v) {
    return function ($129) {
        return Data_Tuple.snd(v($129));
    };
};
var fromIndex = function (dictFoldable1) {
    var foldMap1 = Data_Semigroup_Foldable.foldMap1(dictFoldable1)(Data_Semigroup_Last.semigroupLast);
    var foldr = Data_Foldable.foldr(dictFoldable1.Foldable0());
    return function (i) {
        return function (xs) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v1 instanceof Cons && v1.value1 instanceof Nil) {
                            $tco_done = true;
                            return v1.value0;
                        };
                        if (v1 instanceof Cons && v <= 0) {
                            $tco_done = true;
                            return v1.value0;
                        };
                        if (v1 instanceof Cons) {
                            $tco_var_v = v - 1 | 0;
                            $copy_v1 = v1.value1;
                            return;
                        };
                        if (v1 instanceof Nil) {
                            $tco_done = true;
                            return un(Data_Semigroup_Last.Last)(foldMap1(Data_Semigroup_Last.Last)(xs));
                        };
                        throw new Error("Failed pattern match at Control.Monad.Gen (line 128, column 5 - line 128, column 26): " + [ v.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(i)(foldr(Cons.create)(Nil.value)(xs));
        };
    };
};
var oneOf = function (dictMonadGen) {
    var bind = Control_Bind.bind((dictMonadGen.Monad0()).Bind1());
    var chooseInt = Control_Monad_Gen_Class.chooseInt(dictMonadGen);
    return function (dictFoldable1) {
        var length = Data_Foldable.length(dictFoldable1.Foldable0())(Data_Semiring.semiringInt);
        var fromIndex1 = fromIndex(dictFoldable1);
        return function (xs) {
            return bind(chooseInt(0)(length(xs) - 1 | 0))(function (n) {
                return fromIndex1(n)(xs);
            });
        };
    };
};
var freqSemigroup = function (v) {
    return function (pos) {
        var $119 = pos >= v.value0;
        if ($119) {
            return new Data_Tuple.Tuple(new Data_Maybe.Just(pos - v.value0), v.value1);
        };
        return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, v.value1);
    };
};
var frequency = function (dictMonadGen) {
    var bind = Control_Bind.bind((dictMonadGen.Monad0()).Bind1());
    var chooseFloat = Control_Monad_Gen_Class.chooseFloat(dictMonadGen);
    return function (dictFoldable1) {
        var foldMap = Data_Foldable.foldMap(dictFoldable1.Foldable0())(monoidAdditive);
        var foldMap1 = Data_Semigroup_Foldable.foldMap1(dictFoldable1)(semigroupFreqSemigroup);
        return function (xs) {
            var total = alaF(Data_Monoid_Additive.Additive)(foldMap)(Data_Tuple.fst)(xs);
            return bind(chooseFloat(0.0)(total))(getFreqVal(foldMap1(freqSemigroup)(xs)));
        };
    };
};
var filtered = function (dictMonadRec) {
    var tailRecM = Control_Monad_Rec_Class.tailRecM(dictMonadRec);
    return function (dictMonadGen) {
        var mapFlipped = Data_Functor.mapFlipped((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0());
        return function (gen) {
            var go = function (v) {
                return mapFlipped(gen)(function (a) {
                    if (a instanceof Data_Maybe.Nothing) {
                        return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                    };
                    if (a instanceof Data_Maybe.Just) {
                        return new Control_Monad_Rec_Class.Done(a.value0);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Gen (line 118, column 24 - line 120, column 23): " + [ a.constructor.name ]);
                });
            };
            return tailRecM(go)(Data_Unit.unit);
        };
    };
};
var suchThat = function (dictMonadRec) {
    var filtered1 = filtered(dictMonadRec);
    return function (dictMonadGen) {
        var filtered2 = filtered1(dictMonadGen);
        var mapFlipped = Data_Functor.mapFlipped((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0());
        return function (gen) {
            return function (pred) {
                return filtered2(mapFlipped(gen)(function (a) {
                    var $124 = pred(a);
                    if ($124) {
                        return new Data_Maybe.Just(a);
                    };
                    return Data_Maybe.Nothing.value;
                }));
            };
        };
    };
};
var elements = function (dictMonadGen) {
    var Monad0 = dictMonadGen.Monad0();
    var bind = Control_Bind.bind(Monad0.Bind1());
    var chooseInt = Control_Monad_Gen_Class.chooseInt(dictMonadGen);
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    return function (dictFoldable1) {
        var length = Data_Foldable.length(dictFoldable1.Foldable0())(Data_Semiring.semiringInt);
        var fromIndex1 = fromIndex(dictFoldable1);
        return function (xs) {
            return bind(chooseInt(0)(length(xs) - 1 | 0))(function (n) {
                return pure(fromIndex1(n)(xs));
            });
        };
    };
};
var choose = function (dictMonadGen) {
    var bind = Control_Bind.bind((dictMonadGen.Monad0()).Bind1());
    var chooseBool = Control_Monad_Gen_Class.chooseBool(dictMonadGen);
    return function (genA) {
        return function (genB) {
            return bind(chooseBool)(function (v) {
                if (v) {
                    return genA;
                };
                return genB;
            });
        };
    };
};
export {
    choose,
    oneOf,
    frequency,
    elements,
    unfoldable,
    suchThat,
    filtered
};
export {
    chooseBool,
    chooseFloat,
    chooseInt,
    resize,
    sized
} from "../Control.Monad.Gen.Class/index.js";