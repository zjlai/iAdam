<template>
  <q-page class="flex">
    <q-list link>
      <q-list-header>
        Attention Needed
      </q-list-header>
      <q-item v-for="msg in messages" :key="msg.id">
        <q-item-main
          :label="msg.title"
          :sublabel="mockMsg"
          sublabel-lines="2">
        </q-item-main>
        <q-item-side right>
          <q-item-tile stamp>{{msg.stamp}}</q-item-tile>
        </q-item-side>
      </q-item>
      <q-item-separator />
      <q-list-header>
        Homework
      </q-list-header>
      <q-collapsible group="Homework" label="English" sublabel="Mrs. Tan">
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Assignment 1a
            </q-item-tile>
            <q-item-tile sublabel>
              Chapter 1b, pages 5-10
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Spelling Test on Tuesday
            </q-item-tile>
            <q-item-tile sublabel>
              Word List 75-100
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Details...
            </q-item-tile>
          </q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible group="Homework" label="Maths" sublabel="Mr. Rajah">
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Geometry Assignment
            </q-item-tile>
            <q-item-tile sublabel>
              Worksheet 2b
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Olympiad Training
            </q-item-tile>
            <q-item-tile sublabel>
              Training for upcoming Olympiad
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Details...
            </q-item-tile>
          </q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible group="Homework" label="Science" sublabel="Mr. Jarvis">
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Project Work: Photosynthesis Cycle
            </q-item-tile>
            <q-item-tile sublabel>
              Submission dateline: 25 June
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Science Centre Trip
            </q-item-tile>
            <q-item-tile sublabel>
              Trip on 14 May
            </q-item-tile>
          </q-item-main>
        </q-item>
        <q-item separator>
          <q-item-main>
            <q-item-tile label>
              Details...
            </q-item-tile>
          </q-item-main>
        </q-item>
      </q-collapsible>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageActivities',
  data () {
    return {
      messages: [
        { id: 0, title: 'Consent form for excursion', from: 'Ms Tan, Form Teacher', date: '1 May 2018', stamp: 'Consent' },
        { id: 1, title: 'Hand Foot Mouth Safety', from: 'School Admin', date: '2 May 2018', stamp: 'Acknowledge' },
        { id: 2, title: 'Science Centre trip', from: 'Mr Aziz, Science Teacher', date: 'Today', stamp: 'Consent' }
      ],
      mockMsg: 'Lorem ipsum dolor sit amet, novum mediocrem his ne, vim id tractatos ullamcorper necessitatibus. At corrumpit maiestatis ius, sit te vivendum quaestio. Sea eu putant detracto, te modo mucius nam. Ne iudico appellantur ius, aperiam fuisset reprehendunt nec ne, eos detraxit scripserit an. Mei nominati explicari ne, mundi scribentur ne eam, hinc sale ipsum ne eos. Ei eam veri splendide. Saepe invenire scriptorem est ex. Has stet labitur omittantur cu, sit ne populo partiendo temporibus, epicurei efficiendi at duo. Mei id vidit virtute. Quis doming cu mei. Te est putant ancillae noluisse, ea agam labore vix. Sonet quando tibique vis at, facete iuvaret diceret vix et. No percipit probatus mel, ne his soluta noluisse. Vix magna liber suscipit et, vis ea quem explicari reprehendunt, luptatum gloriatur suscipiantur ne mel. Denique temporibus signiferumque te mel. Vim graece noster cu, ad mel mundi oratio consulatu. Est modo scripta nominati ut. Te usu soluta quaestio definitiones, eu has rebum clita voluptua. Sapientem deseruisse instructior et cum. Ius mazim melius ponderum an, has et deserunt dissentias mediocritatem, pri no modo constituam.'
    }
  }
}
</script>

<style>
</style>
