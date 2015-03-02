[{
    shouldDeps : [
        'inherit',
        'jquery',
        'objects',
        'functions',
        'events',
        'dom',
        { mod : 'init' },
        { block : 'i-bem', elems : ['internal'] },
        { elem : 'event-manager', mods : { type : ['dom', 'bem'] } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        {
            block : 'i-bem',
            tech : 'bemhtml'
        }
    ]
}]