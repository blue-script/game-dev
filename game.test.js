const {Game} = require("./game.js")

describe("game test", () => {
    it("init test", () => {
        const game = new Game()

        game.settings = {
            gridSize: {
                width: 4,
                height: 5
            }
        }

        expect(game.settings.gridSize.width).toBe(4)
        expect(game.settings.gridSize.height).toBe(5)
    });

    it("start game", () => {
        const game = new Game()

        game.settings = {
            gridSize: {
                width: 4,
                height: 5
            }
        }

        expect(game.status).toBe("pending")
        game.start()
        expect(game.status).toBe("in-process")
    });

    it("player1 and player2 should have unique coordinates", () => {
        const game = new Game()

        game.settings = {
            gridSize: {
                width: 1,
                height: 3
            }
        }

        game.start()

        console.log("Game", game.player1)
        console.log("Game", game.player2)
        console.log("Game", game.google)

        expect([1]).toContain(game.player1.position.x)
        expect([1, 2, 3]).toContain(game.player1.position.y)

        expect([1]).toContain(game.player2.position.x)
        expect([1, 2, 3]).toContain(game.player2.position.y)

        expect([1]).toContain(game.google.position.x)
        expect([1, 2, 3]).toContain(game.google.position.y)

        expect(
            game.google.position.x !== game.player1.position.x
            || (game.google.position.y !== game.player1.position.y && game.google.position.x !== game.player2.position.x) || (game.google.position.y !== game.player2.position.y && (game.player1.position.x !== game.player2.position.x
                || game.player1.position.y !== game.player2.position.y))
        )
    })
})