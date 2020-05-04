class SoundManager {

    ding = null;
    ding_error = null;
    ding_success = null;
    ding_pop = null;
    ding_remove = null;

    constructor() {

        this.ding = new Howl({
            src: [resolveUrl('../static/snd/item_message.mp3')],
            volume: 0.1
        });
        this.ding_error = new Howl({
            src: [resolveUrl('../static/snd/item_error.wav')],
            volume: 0.1
        });
        this.ding_success = new Howl({
            src: [resolveUrl('../static/snd/item_success.mp3')],
            volume: 0.1
        });
        this.ding_pop = new Howl({
            src: [resolveUrl('../static/snd/item_pop.mp3')],
            volume: 0.4
        });
        this.ding_remove = new Howl({
            src: [resolveUrl('../static/snd/item_remove.mp3')],
            volume: 0.4
        });
    }

    play_ding() {
        this.ding.play()
    }

    play_error() {
        this.ding_error.play()
    }

    play_success() {
        this.ding_success.play();
    }

    play_pop() {
        this.ding_pop.play();
    }

    play_remove() {
        this.play_remove.play();
    }
}

soundManager = new SoundManager();
