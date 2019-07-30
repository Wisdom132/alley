<template>
  <card title="Notifications" sub-title="">
    <div>
      <div class="row">
        <div class="col-md-8">
          <h5>Notifications Style</h5>
          <div class="alert alert-info">
            <span>This is a plain notification</span>
          </div>
          <div class="alert alert-info">
            <span>This is a plain notification</span>
          </div>
          <div class="alert alert-info">
            <span>This is a plain notification</span>
          </div>
        </div>
      </div>

    </div>
  </card>
</template>
<script>
import NotificationTemplate from '../Notifications/NotificationTemplate';

export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "ti-gift",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>
<style>
</style>
