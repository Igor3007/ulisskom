modules.define('catalog-filter', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    const filter = [{
                        'title': 'Производитель',
                        'list': [
                            'Apecs',
                            'Avers',
                            'Border',
                            'Evrolock',
                            'Fuardo',
                            'Kale Kilit',
                            'Mottura',
                            'Viro',
                        ]
                    }]
                }
            }
        }
    }));

});
