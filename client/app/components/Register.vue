<template>
    <Page actionBarHidden="true" loaded="onPageLoaded">
        <FlexboxLayout class="page">
            <StackLayout class="form">

                <StackLayout class="logo-container">
                    <Label class="logo" text="LOGO"></Label>

                </StackLayout>



                <!-- HEADING HERE-->
                <StackLayout class="header-container">
	                <Label class="header" text="Outer Mind" />
                    <Label class="subheader" text='"Inspirational quote goes here"' />
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField
                        hint="Name"
                        name="name"
                        v-model="name"
                        class="input"/>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField
                        hint="Email"
                        keyboardType="email"
                        name="email"
                        v-model="email"
                        autocorrect="false"
                        autocapitalizationType="none"
                        class="input" />
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField
                        hint="Password"
                        name="password"
                        v-model="password"
                        class="input"/>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField
                        hint="Confirm password"
                        name="confirm-password"
                        v-model="confirmPassword"
                        class="input"/>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="button-container">

                    <Button class="btn-sign-up" text="Sign Up" @tap="register"></Button>

                </StackLayout>

            </StackLayout>



        </FlexboxLayout>
    </Page>
</template>

<style scoped>

    StackLayout {
    }

    .logo-container {
        height: 100;
        width: 100;
        margin-top: 70;
        margin-bottom: 20;
        border-color: black;
        border-width: 2;
        vertical-align: center;
    }

    .logo {
        text-align: center;
        font-size: 20;
    }

    .page {
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: top;
    }

    .header-container {
        margin-top: 0;
        margin-bottom: 30;
    }

    .header {
        margin-bottom: 10;
        font-size: 30;
        horizontal-align: center;
    }

    .subheader {
        font-size: 18;
        font-style: italic;
        margin-bottom: 20;
        horizontal-align: center;
    }

    .btn-sign-up {
        background-color: #53ba82;
        color: #ffffff
    }

    .button-container {
        margin-top: 50;
    }

    .input {
        padding-left: 10;
        padding-right: 10;
    }

</style>
