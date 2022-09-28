{ name = "typescript-bridge"
, dependencies =
  [ "aff"
  , "argonaut"
  , "arrays"
  , "bifunctors"
  , "console"
  , "debug"
  , "dodo-printer"
  , "effect"
  , "either"
  , "exceptions"
  , "foldable-traversable"
  , "heterogeneous"
  , "language-cst-parser"
  , "lists"
  , "maybe"
  , "newtype"
  , "node-buffer"
  , "node-child-process"
  , "node-fs"
  , "node-fs-aff"
  , "node-glob-basic"
  , "node-path"
  , "node-process"
  , "optparse"
  , "ordered-collections"
  , "ordered-set"
  , "prelude"
  , "ps-cst"
  , "record"
  , "safe-coerce"
  , "spec"
  , "strings"
  , "sunde"
  , "transformers"
  , "tuples"
  , "typelevel"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
