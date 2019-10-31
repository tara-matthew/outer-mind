<template>
    <Page actionBarHidden="true" loaded="onPageLoaded">
        <StackLayout class="form">

                <FlexboxLayout
                    class="type-or-talk"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    height="300"
                    backgroundColor="white">

                    <Label
                        text="Type"
                        height="80"
                        backgroundColor="white"
                        marginRight="10" />

                    <Label
                        text="or"
                        height="80"
                        backgroundColor="white"
                        marginRight="10" />

                    <Label
                        text="Talk"
                        height="80"
                        backgroundColor="#0BC2CF"
                        borderColor="#0BC2CF"
                        color="white"
                        paddingLeft="15"
                        paddingRight="15"
                        borderRadius="10" />

                    <!-- <Label
                        text="Talk"
                        class="talk-btn"
                        height="80"
                        paddingLeft="15"
                        paddingRight="15"
                        borderRadius="10"
                        verticalAlign="top"
                        borderColor="black"
                        backgroundColor="black" /> -->
                </FlexboxLayout>

            <StackLayout class="type-text-container">
                <TextField
                    hint="Type here"
                    name="confirm-password"
                    v-model="confirmPassword"
                    class="input type-text"/>
            </StackLayout>

        </StackLayout>


    </Page>
</template>

<script>
    const utilsModule = require("tns-core-modules/utils/utils")
    export default {
        mounted() {
            console.log('mounted')
        }
    }
</script>

<style scoped>

    StackLayout{
        border-color: white;
        border-width: 2;
    }

    Label {
        font-size: 55;
        margin-right: 0;
        vertical-align: middle;
    }

    .form {
        vertical-align: middle;
        text-align: center;
    }

    .type-or-talk {
        text-align: center;
        align-items: center;
        font-size: 80;
        margin-bottom: 25;
        margin-top: 25;
    }

    /* .type-label {
        margin-bottom: 0;
        margin-top: 0;
    } */

    /* .type-or-talk {
        vertical-align: middle;
        margin-top: 50;
        margin-bottom: 50;
        background-color: white;
    } */

    /* .type-btn {
        background-color: white;
    } */

    .talk-btn {
        border-radius: 0;
        border-width: 0;
        vertical-align: middle;
    }

    .type-text-container {
        vertical-align: middle;
    }

    .type-text {
        margin-top: 0;
    }

    .talk-btn {
        color: white;
    }

</style>
