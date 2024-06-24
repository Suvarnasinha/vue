<!-- <template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-form @submit.prevent="submitForm" class="pa-4 rounded-lg shadow">
          <v-text-field label="First Name" v-model="formData.firstName" required outlined></v-text-field>
          <v-text-field label="Last Name" v-model="formData.lastName" required outlined></v-text-field>
          <v-text-field label="Email" v-model="formData.email" required outlined></v-text-field>
          <v-text-field label="City" v-model="formData.city" outlined></v-text-field>
          <v-select
            label="State"
            v-model="formData.state"
            :items="states"
            outlined
            required
          ></v-select>
          <v-text-field label="Phone Number" v-model="formData.phoneNumber" required outlined></v-text-field>
          <v-text-field label="Date of Birth" v-model="formData.dob" type="date" required outlined></v-text-field>
          
          <h3>Gender</h3>
          <v-radio-group v-model="formData.gender">
            <v-radio label="Male" value="male"></v-radio>
            <v-radio label="Female" value="female"></v-radio>
            <v-radio label="Other" value="other"></v-radio>
          </v-radio-group>

          <h3>Hobbies</h3>
          <v-checkbox v-model="formData.hobbies.sports" label="Sports"></v-checkbox>
          <v-checkbox v-model="formData.hobbies.reading" label="Reading"></v-checkbox>
          <v-checkbox v-model="formData.hobbies.music" label="Music"></v-checkbox>

          <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
          <v-btn @click="printFormData" color="primary" class="mt-4 ml-4">Print Form Data</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  state: '',
  phoneNumber: '',
  dob: '',
  gender: '',
  hobbies: {
    sports: false,
    reading: false,
    music: false,
  }
});

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const submitForm = () => {
  console.log('Form Data:', formData.value);
  // Add form submission logic here
};

const printFormData = () => {
  console.log('Form Data:', formData.value);
};
</script>

<style scoped>
/* Scoped styles can be used to fine-tune alignment and decoration */
.rounded-lg {
  border-radius: 10px; /* Rounded corners */
}

.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for depth */
}
</style> -->



<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-form @submit.prevent="submitForm" class="pa-4 rounded-lg shadow">
          <v-text-field v-model="formData.firstName" label="First Name" :rules="firstNameRules" outlined></v-text-field>
          <span v-if="!$v.formData.firstName.required && $v.formData.firstName.$dirty">First Name is required</span>

          <v-text-field v-model="formData.lastName" label="Last Name" :rules="lastNameRules" outlined></v-text-field>
          <span v-if="!$v.formData.lastName.required && $v.formData.lastName.$dirty">Last Name is required</span>

          <v-text-field v-model="formData.email" label="Email" :rules="emailRules" outlined></v-text-field>
          <span v-if="!$v.formData.email.required && $v.formData.email.$dirty">Email is required</span>
          <span v-else-if="!$v.formData.email.email && $v.formData.email.$dirty">Invalid email format</span>

          <v-select v-model="formData.state" :items="states" label="State" :rules="stateRules" outlined></v-select>
          <span v-if="!$v.formData.state.required && $v.formData.state.$dirty">State is required</span>

          <v-text-field v-model="formData.phoneNumber" label="Phone Number" :rules="phoneNumberRules" outlined></v-text-field>
          <span v-if="!$v.formData.phoneNumber.required && $v.formData.phoneNumber.$dirty">Phone Number is required</span>

          <v-text-field v-model="formData.dob" label="Date of Birth" type="date" :rules="dobRules" outlined></v-text-field>
          <span v-if="!$v.formData.dob.required && $v.formData.dob.$dirty">Date of Birth is required</span>

          <v-radio-group v-model="formData.gender" :rules="genderRules" row>
            <v-radio label="Male" value="male"></v-radio>
            <v-radio label="Female" value="female"></v-radio>
            <v-radio label="Other" value="other"></v-radio>
          </v-radio-group>
          <span v-if="!$v.formData.gender.required && $v.formData.gender.$dirty">Gender selection is required</span>

          <v-checkbox v-model="formData.hobbies.sports" label="Sports"></v-checkbox>
          <v-checkbox v-model="formData.hobbies.reading" label="Reading"></v-checkbox>
          <v-checkbox v-model="formData.hobbies.music" label="Music"></v-checkbox>

          <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
          <v-btn @click="printFormData" color="primary" class="mt-4 ml-4">Print Form Data</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  state: '',
  phoneNumber: '',
  dob: '',
  gender: '',
  hobbies: {
    sports: false,
    reading: false,
    music: false,
  }
});

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const rules = {
  formData: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    state: { required },
    phoneNumber: { required },
    dob: { required },
    gender: { required },
  }
};

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  if (v$.value.$invalid) {
    console.log('Form is invalid');
    v$.value.$touch();
    return;
  }
  console.log('Form Data:', formData.value);
};

const printFormData = () => {
  console.log('Form Data:', formData.value);
};
</script>

<style scoped>
.rounded-lg {
  border-radius: 10px;
}

.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
