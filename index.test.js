const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: 'los locos'})

        expect(testBand.name).toBe('los locos');
    })

  test('can create a Musician', async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({name: 'nico'})
        expect(testMusician.name).toBe('nico');
  })
  
  test('Bands can have many musicians', async()=> {
    let BTS = await Band.create({ name: "perron" })
    const loco = await Musician.create({name: 'nicolas'})
    const loco2 = await Musician.create({name: 'Daniel'})

    await BTS.addMusician(loco)
    await BTS.addMusician(loco2)
    const musicians = await BTS.getMusicians()

    expect(musicians.length).toBe(2)
    expect(musicians[0] instanceof Musician).toBeTruthy
  })


})