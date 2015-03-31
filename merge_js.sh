#!/bin/bash
rm -f ./src/ambit_dist.js
cat ./src/ambit.js ./src/Substance.js ./src/Bundle.js > ./src/ambit_dist.js
