const annotation = [ '$filter' ];

function categoryFilter($filter) {

    return function(value) {
        value = fromOracle(value) || fromODS(value);
        return translate(!value ? 'global.common.nocategoryFilterLabel' :
            (!value.state ? 'global.common.noStatecategoryFilterLabel' : 'global.common.categoryFilterLabel'), value);
    };
}

categoryFilter.$inject = annotation;

export default categoryFilter;