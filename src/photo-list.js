const photoList = {
    prep : {
        name: "Prep",
        catUrl: '/prep',
        description: 'Photos of the beautiful Bride!',
        landingPhoto: 'girlprep/girlprep8',
        coverPhoto: 'girlprep/girlprep4-3x.webp',
        hasSubCategories: true,
        list: [
            {
                name: 'Girls',
                active: true,
                total: 36,
                baseFileName: 'girlprep/girlprep',
            },
            {
                name: 'Guys',
                active: false,
                total: 42,
                baseFileName: 'guyprep/guyprep',
                secretPhotoIndexes:[]
            }
        ],
    },
    portraits : {
        name: "Portraits",
        catUrl: '/portraits',
        description: 'Portraits of the family.',
        landingPhoto: 'portraits/group/portraits-group41',
        coverPhoto: 'portraits/group/portraits-group23-3x.webp',
        hasSubCategories: true,
        list: [
            {
                name: 'Group',
                active: true,
                total: 55,
                baseFileName: 'portraits/group/portraits-group',
            },
            {
                name: 'Bride',
                active: false,
                total: 97,
                baseFileName: 'portraits/mary/portraits-mary',
            },
            {
                name: 'Groom',
                active: false,
                total: 109,
                baseFileName: 'portraits/micah/portraits-mary',
            },
            
        ]
    },
    details : {
        name: "Details",
        catUrl: '/details',
        description: 'Detail of the Day',
        landingPhoto: 'details/details10',
        coverPhoto: 'details/details5-3x.webp',
        list: {
            total: 53,
            baseFileName: 'details/details',
        }
    },
    before : {
        name: "Before Mass",
        catUrl: '/mass',
        description: 'Photos before mass.',
        landingPhoto: 'mass/before/mass-before10',
        coverPhoto: 'mass/before/mass-before11-3x.webp',
        list: {
            total: 19,
            baseFileName: 'mass/before/mass-before',
        }
    },
    procession : {
        name: "Procession",
        catUrl: '/mass',
        description: 'Here comes the bride.',
        landingPhoto: 'mass/procession/mass-procession27',
        coverPhoto: 'mass/procession/mass-procession65-3x.webp',
        list: {
            total: 82,
            baseFileName: 'mass/procession/mass-procession',
        }
    },
    mass : {
        name: "Ceremony",
        catUrl: '/mass',
        description: 'Photos of the Mass',
        landingPhoto: 'mass/ceremony/mass-ceremony26',
        coverPhoto: 'mass/ceremony/mass-ceremony18-3x.webp',
        hasSubCategories: true,
        list: [
            {
                name: 'Mass',
                active: true,
                total: 162,
                baseFileName: 'mass/ceremony/mass-ceremony',
            },
            {
                name: 'Exit',
                active: true,
                total: 35,
                baseFileName: 'mass/exit/mass-exit',
            }
        ]
    },
    reception : {
        name: "More Reception",
        catUrl: '/reception',
        description: 'Everybody gettin\' down to the music!',
        landingPhoto: 'reception/middle/reception-middle75',
        coverPhoto: 'reception/middle/reception-middle41-3x.webp',
        list: {
            total: 271,
            baseFileName: 'reception/middle/reception-middle',
        }
    },
    party : {
        name: "Reception",
        catUrl: '/party',
        description: 'Everybody gettin\' down to the music!',
        landingPhoto: 'reception/start/reception-start41',
        coverPhoto: 'reception/start/reception-start3-3x.webp',
        list: {
            total: 266,
            baseFileName: 'reception/start/reception-start',
        }
    },
    end : {
        name: "Even More Reception",
        catUrl: '/end',
        description: 'Everybody gettin\' down to the music!',
        landingPhoto: 'reception/start/reception-start164',
        coverPhoto: 'reception/end/reception-end3-3x.webp',
        list: {
            total: 266,
            baseFileName: 'reception/end/reception-end',
        }
    }
}
export default photoList;