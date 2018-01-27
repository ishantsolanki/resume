rm -rf docs
mkdir docs
cp index.html docs/index.html
rollup -c rollup.config.prod.js