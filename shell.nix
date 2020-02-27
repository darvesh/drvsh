#!/usr/bin/env nix-shell
with import <nixpkgs> {};
stdenv.mkDerivation {
    name = "mkrbin";
    buildInputs = [ nodejs mongodb ];
    BIN_MONGO_CSTRING=mongodb://localhost:27017/bin-store;
    BIN_PORT=4000;
}

