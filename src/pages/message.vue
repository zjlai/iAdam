<template>
  <q-page class="flex">
    <q-card>
      <q-card-title>
        {{messages[$route.params.id].title}}
        <span slot="subtitle">From: {{messages[$route.params.id].from}}</span>
        <span slot="right">{{messages[$route.params.id].date}}</span>
      </q-card-title>
      <q-card-main>
        <p>
        Lorem ipsum dolor sit amet, novum mediocrem his ne, vim id tractatos ullamcorper necessitatibus. At corrumpit maiestatis ius, sit te vivendum quaestio. Sea eu putant detracto, te modo mucius nam. Ne iudico appellantur ius, aperiam fuisset reprehendunt nec ne, eos detraxit scripserit an. Mei nominati explicari ne, mundi scribentur ne eam, hinc sale ipsum ne eos. Ei eam veri splendide.

In ius imperdiet deterruisset necessitatibus, commodo fabulas te qui. Impedit explicari qui te. Has rationibus vituperata ut, at per porro quidam fabulas. Accumsan delectus definitionem ne eam, aeterno malorum vim in. Ne ignota alienum incorrupte eam.

Saepe invenire scriptorem est ex. Has stet labitur omittantur cu, sit ne populo partiendo temporibus, epicurei efficiendi at duo. Mei id vidit virtute. Quis doming cu mei. Te est putant ancillae noluisse, ea agam labore vix.

Sonet quando tibique vis at, facete iuvaret diceret vix et. No percipit probatus mel, ne his soluta noluisse. Vix magna liber suscipit et, vis ea quem explicari reprehendunt, luptatum gloriatur suscipiantur ne mel. Denique temporibus signiferumque te mel.

Vim graece noster cu, ad mel mundi oratio consulatu. Est modo scripta nominati ut. Te usu soluta quaestio definitiones, eu has rebum clita voluptua. Sapientem deseruisse instructior et cum. Ius mazim melius ponderum an, has et deserunt dissentias mediocritatem, pri no modo constituam.
        </p>
      </q-card-main>
      <q-card-actions class="column q-pa-none" v-if="$route.params.id === '0'">
        <div class="block q-pl-sm">Do you consent?</div>
        <q-btn-group class="q-my-md row justify-around">
          <q-btn color="primary" label="Yes" style="width:50%"/>
          <q-btn color="warning" label="No" style="width:50%; margin-left:0" />
        </q-btn-group>
      </q-card-actions>
      <q-card-actions class="column q-pa-none" v-if="$route.params.id === '1'">
        <q-btn color="primary" label="Acknowledged" style="width:100%"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageMessage',
  data () {
    return {
      messages: [
        { title: 'Consent form for excursion', from: 'Ms Tan, Form Teacher', date: '1 May 2018' },
        { title: 'Hand Foot Mouth Safety', from: 'School Admin', date: '2 May 2018' },
        { title: 'Science Centre trip', from: 'Mr Aziz, Science Teacher', date: 'Today' },
        { title: 'Random Information', from: 'Staff', date: 'Today' }
      ]
    }
  }
}
</script>

<style>
</style>
