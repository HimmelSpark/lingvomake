<!--suppress ALL -->
<template>
    <v-app>

        <template v-if="isUserLoggedIn">
            <core-toolbar/>
            <core-drawer/>
        </template>

        <template v-if="errorMessage">
            <v-snackbar
                    :timeout="5000"
                    :multi-line="true"
                    :color="info"
                    :value="true"
                    @input="closeError"
            >
                {{ errorMessage }}
                <v-btn
                        flat
                        color="error"
                        @click.native="closeError"> Close
                </v-btn>
            </v-snackbar>
        </template>

        <core-view/>

    </v-app>
</template>

<script>
  export default {
	computed: {
	  isUserLoggedIn() {
		    return this.$store.getters.isUserLoggedIn
	  },
	  error() {
	  },
	  errorMessage() {
		    return this.$store.getters.error
	  }
	},
	methods: {
	  closeError() {
		    this.$store.commit('clearError')
	  }
	}
  }
</script>

<style lang="scss">
    @import '@/styles/index.scss';

    /* Remove in 1.2 */
    .v-datatable thead th.column.sortable i {
        vertical-align: unset;
    }

    .margin-top {
        margin-top: 300px;
    }
</style>
