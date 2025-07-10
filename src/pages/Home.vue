
<template>
  <TheHero/>
  <div>
    <div class="row g-4 mb-5 mt-5">
      <AgencyCard
        v-for="(agency, index) in agencies"
        :key="index"
        :title="agency.title"
        :subtitle="agency.subtitle"
        :year="agency.year"
        :image="agency.image"
      />
    </div>

    <ContactSection />
  </div>
</template>

<script>
import AgencyCard from '../components/AgencyCard.vue'
import ContactSection from '../components/ContactSection.vue'
import TheHero from '@/components/TheHero.vue'
export default {
  name: 'HomePage',
  components: {
    AgencyCard,
    ContactSection,
    TheHero
  },
  data() {
    return {
      agencies: [
        {
          title: 'Innovate Digital Agency',
          subtitle: 'SINCE',
          year: '2017',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'NexrGen Marketing Lab',
          subtitle: 'LAUNCHED IN',
          year: '2021',
          image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Innovate Digital Agency',
          subtitle: 'SINCE',
          year: '2017',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'NexrGen Marketing Lab',
          subtitle: 'LAUNCHED IN',
          year: '2021',
          image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]
    }
  }
}
</script>
