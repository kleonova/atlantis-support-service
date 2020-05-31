<template>
  <div class="page">
    <div class="page-content">
      <div class="panel">
        <div class="panel-body">
          <div class="brand">
            <i class="large material-icons yellow-text">account_balance</i>
            <h2 class="brand-text">ЖКХ Атлантида</h2>
          </div>

          <form method="post" @submit.prevent="submitForm">
            <div class="form-group">
              <label class="floating-label">Электронная почта</label>
              <input
                type="text"
                class="form-control"
                name="email"
                v-model.trim="email"
                :class="{ invalid: validEmail }"
              />
              <span
                class="helper-text invalid"
                v-if="$v.email.$dirty && !$v.email.required"
              >
                Во имя Посейдона, заполни email
              </span>
              <span
                class="helper-text invalid"
                v-else-if="$v.email.$dirty && !$v.email.email"
              >
                Во имя Посейдона, заполни email нормально
              </span>
            </div>

            <div class="form-group">
              <label class="floating-label">Пароль</label>
              <input
                type="password"
                class="form-control"
                name="password"
                v-model.trim="password"
                :class="{ invalid: validPassword }"
              />
              <span
                class="helper-text invalid"
                v-if="$v.password.$dirty && !$v.password.required"
              >
                Во имя Посейдона, заполни пароль
              </span>
              <span
                class="helper-text invalid"
                v-else-if="$v.password.$dirty && !$v.password.minLength"
              >
                Пароль должен быть длинее, чем хвост Сатира (от 6 символов)
              </span>
            </div>

            <div class="form-group">
              <label class="floating-label">Номер договора</label>
              <input
                type="text"
                class="form-control"
                name="contract"
                v-model.trim="contract"
                :class="{ invalid: validContract }"
              />
              <span
                class="helper-text invalid"
                v-if="$v.contract.$dirty && !$v.contract.required"
              >
                Введи номер договора
              </span>
              <span
                class="helper-text invalid"
                v-else-if="$v.contract.$dirty && !$v.contract.numeric"
              >
                В номере договора должны быть только цифры
              </span>
            </div>
            <div class="form-group block-actions">
              <label>
                <input
                  type="checkbox"
                  class="filled-in"
                  checked="checked"
                  v-model="agree"
                />
                <span>С правилами ознакомлен</span>
              </label>
              <a href="#">Правила</a>
            </div>
            <button
              type="submit"
              class="btn btn-block waves-effect waves-light"
            >
              Создать аккаунт
            </button>
          </form>
          <p class="text-center">
            Уже есть аккаунт?
            <router-link tag="a" to="/login">Войти</router-link>
          </p>
        </div>
      </div>

      <footer>
        <p>WEBSITE BY Germes Creation Studio</p>
        <p>© 2020. All RIGHT RESERVED.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { required, email, numeric, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    contract: "",
    agree: false
  }),
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    contract: {
      required,
      numeric
    },
    agree: { checked: v => v }
  },
  methods: {
    async submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        contract: this.contract
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  },
  computed: {
    validEmail() {
      return (
        (this.$v.email.$dirty && !this.$v.email.required) ||
        (this.$v.email.$dirty && !this.$v.email.email)
      );
    },
    validPassword() {
      return (
        (this.$v.password.$dirty && !this.$v.password.required) ||
        (this.$v.password.$dirty && !this.$v.password.minLength)
      );
    },
    validContract() {
      return (
        (this.$v.contract.$dirty && !this.$v.contract.required) ||
        (this.$v.contract.$dirty && !this.$v.contract.numeric)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 400px;
$wform: 320px;

.btn-block {
  width: 100%;
}

.text-center {
  text-align: center;
}

.page {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .page-content {
    display: flex;
    flex-direction: column;
    width: $width;
  }

  .panel {
    background-color: #fff;
    margin: 0 auto;
    padding: ($width - $wform) /2;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    color: #757575;

    .panel-body {
    }
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    .brand-img {
      width: 4rem;
    }

    .brand-text {
      font-size: 1.3rem !important;
      font-weight: bold;
      margin-top: 0.5rem;
      margin-bottom: 0;
      font-family: "Montserrat", sans-serif;
    }
  }

  form {
    width: $wform;
    .form-group {
      //margin: 0;
    }

    .btn {
      margin: ($width - $wform)/4 0;
    }
  }

  .block-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ($width - $wform)/4;
  }

  footer {
    color: #fff;
    margin-top: 60px;
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-align: center;

    .social {
      a {
        i {
          color: #fff;
        }
      }
    }
  }
}
</style>
