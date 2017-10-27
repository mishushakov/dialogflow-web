<template>
<section id ="app">

    <!-- The input -->
    <div class="query">
        <div class="wrapper" v-if="micro == false">
            <i class="material-icons iicon" @click="microphone(true)">keyboard</i><input aria-label="Ask me something" autocomplete="off" v-model="query" class="queryform" @keyup.enter="submit()" placeholder="Ask me something..." autofocus type="text">        
        </div>
        <div class="wrapper" v-else>
            <i class="material-icons iicon" @click="microphone(false)">mic</i><input aria-label="Microphone Input" class="queryform" placeholder="Go ahead, im listening..." disabled>   
        </div>
    </div>

    <main class="ai-window">

        <br>
        <br>

        <!-- Chat window -->
        <table v-for="a in answers" class="chat-window">

            <!-- Your messages -->
            <tr>
                <td class="bubble">{{a.result.resolvedQuery}}</td>
            </tr>

            <!-- Dialogflow messages -->
            <tr>
                <td>

                    <!-- Bot speech output -->
                    <div v-if="a.result.fulfillment.speech" class="bubble bot">
                        {{a.result.fulfillment.speech}}
                    </div>

                    <!-- Bot message types / Card -->

                    <div v-for="r in a.result.fulfillment.messages">

                        <div class="mdc-card" v-if="r.type == 'basic_card'">
                            <img class="mdc-card__media-item" :src="r.image.url">
                            <section class="mdc-card__primary">
                                <h1 class="mdc-card__title mdc-card__title">{{r.title}}</h1>
                                <br>
                                <h2 class="mdc-card__subtitle">{{r.subtitle}}</h2>
                            </section>
                            <section class="mdc-card__supporting-text">
                                {{r.formattedText}}
                            </section>
                            <section class="mdc-card__actions" v-for="button in r.buttons">
                                <a class="mdc-button mdc-button--compact mdc-card__action" target="_blank" :href="button.openUrlAction.url">{{button.title}} <i class="material-icons openlink">open_in_new</i></a>
                            </section>
                        </div>

                        <!-- Bot message types / List -->

                        <div class="mdc-list-group mdc-card" v-if="r.type == 'list_card'">
                            <h3 class="mdc-list-group__subheader">{{r.title}}</h3>
                            <ul class="mdc-list" v-for="item in r.items">
                                <span class="mdc-list-item__text">
                                    {{item.title}}
                                    <span class="mdc-list-item__text__secondary">{{item.description}}</span>
                                </span>

                                <br>
                                <br>

                            </ul>
                        </div>

                        <!-- Bot message types / Link Chip -->

                        <div v-if="r.type == 'link_out_chip'" class="chips">
                            <a class="suggestion link" :href="r.url" target="_blank">
                                {{r.destinationName}} <i class="material-icons openlink">open_in_new</i>
                            </a>
                        </div>

                        <!-- Bot message types / Suggestion Chip -->

                        <div v-if="r.type == 'suggestion_chips'" class="chips">
                            <div class="suggestion" @click="autosubmit(s.title)" v-for="s in r.suggestions">
                                {{s.title}}
                            </div>
                        </div>

                    </div>
                </td>
            </tr>
        </table>

        <br>
        <p class="copyright" id="bottom">Proudly powered by <a href="https://mish.io/Ushakov">Ushakov</a> & <a href="https://dialogflow.com">Dialogflow</a></p>

    </main>
</section>
</template>

<style lang="sass">
@import url('https://unpkg.com/material-components-web@0.20.0/dist/material-components-web.min.css')
@import url('https://fonts.googleapis.com/css?family=Roboto')
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')

$color: #FF9800

body
    margin: 0
    background-color: #F5F5F5
    font-family: 'Roboto', sans-serif

.wrapper
    max-width: 500px
    margin-left: auto
    margin-right: auto

.ai-window
    max-width: 500px
    margin-left: auto
    margin-right: auto
    padding: 1rem

.query
    padding: 16px 0px
    background-color: white
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    z-index: 999
    position: fixed
    width: 100%

.queryform
    border: 0
    width: 100% - 20%
    margin-left: 60px
    font-size: 16px
    outline: none
    color: rgba(0,0,0,0.8)
    font-weight: 500
    caret-color: red

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.wrapper:hover > .iicon
    color: $color

.iicon
    margin-left: 20px
    position: absolute
    vertical-align: middle
    color: rgba(0,0,0,0.8)
    cursor: pointer

.chat-window
    width: 100%

.bubble
    max-width: 300px
    background-color: #E1E1E1
    padding: 16px
    border-radius: 8px
    color: rgba(0,0,0,0.7)
    float: right

.bubble.bot
    background-color: white
    float: left
    margin-right: 10px

td
    margin-top: 30px
    margin-bottom: 10px

.mdc-card
    background-color: white
    max-width: 300px

.openlink
    vertical-align: middle
    margin-top: -5px
    margin-left: 5px

.mdc-card__media-item
    height: auto
    width: 100%

.mdc-card__action
    color: $color

.chips
    margin-left: -10px

.suggestion
    margin-top: 10px
    float: left
    margin-left: 10px
    padding: 10px
    border: 2px rgba(0,0,0,0.4) solid
    color: rgba(0,0,0,0.4)
    border-radius: 6px
    cursor: pointer

.suggestion:active
    border: 2px rgba(0,0,0,1) solid
    color: rgba(0,0,0,1)

.suggestion.link
    color: white
    background-color: $color
    border: 2px $color solid

.suggestion.link:active
    background-color: darken($color, 10%)
    border: 2px darken($color, 10%) solid

.copyright
    font-weight: 600
    color: rgba(0,0,0,0.8)

.copyright a
    text-decoration: none
    color: rgba(0,0,0,0.8)
    border-bottom: 2px solid transparent

.copyright a:hover
    color: $color
    border-bottom: 2px solid $color
    
</style>

<script>
import { ApiAiClient } from "api-ai-javascript"
const client = new ApiAiClient({accessToken: '9d686a47b1de48bab431e94750d1cd87'})

export default {
    name: 'app',
    data: function(){
        return {
            answers: [],
            query: '',
            micro: false
        }
    },
    methods: {
        submit(){
            client.textRequest(this.query).then((response) => {
                if (this.query == 'clear') this.answers = []

                this.answers.push(response)
                this.query = ''

                //window.scrollTo(0, document.body.scrollHeight) <- Uncomment this if you want autoscroll
            })
        },
        autosubmit(suggestion){
            this.query = suggestion
            this.submit()
        },
        microphone(mode){
            this.micro = mode // <- to be honest, it doesn't do anything, because im to lazy to download chrome to implement WebSpeech API
        }
    }
}
</script>