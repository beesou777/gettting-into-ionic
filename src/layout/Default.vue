<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{props.PageTitle}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     <slot></slot>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons
} from "@ionic/vue";

const props = defineProps({
  PageTitle: String,
  pageDefaultBackLink: String
});
</script>