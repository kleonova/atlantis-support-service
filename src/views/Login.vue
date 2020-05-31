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
              <span class="helper-text invalid" v-if="validPassword">
                Во имя Посейдона, заполни пароль
              </span>
            </div>
            <div class="form-group block-actions">
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>Запомнить</span>
              </label>
              <a href="forgot-password.html">Забыли пароль?</a>
            </div>
            <button
              type="submit"
              class="btn btn-block waves-effect waves-light"
            >
              Войти
            </button>
          </form>
          <p class="text-center">
            Впервые у нас? Тогда вам нужна
            <router-link tag="a" to="/register">Регистрация</router-link>
          </p>
        </div>
      </div>

      <footer>
        <p>WEBSITE BY Germes Creation Studio</p>
        <p>© 2020. All RIGHT RESERVED.</p>
        <!--<div class="social">
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-twitter" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-facebook" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-google-plus" aria-hidden="true"></i>
          </a>
        </div>-->
      </footer>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: {
      email,
      required
    },
    password: {
      required
    }
  },
  methods: {
    async submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
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
      return this.$v.password.$dirty && !this.$v.password.required;
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
