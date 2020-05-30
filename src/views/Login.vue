<template>
  <div class="page">
    <div class="page-content">
      <div class="panel">
        <div class="panel-body">
          <div class="brand">
            <img class="brand-img" src="../assets/images/logo.svg" alt="logo" />
            <h2 class="brand-text">Атлантида</h2>
          </div>
          <form method="post" action="#" autocomplete="off">
            <div
              class="form-group form-material floating"
              data-plugin="formMaterial"
            >
              <input type="email" class="form-control" name="email" />
              <label class="floating-label">Электронная почта</label>
            </div>
            <div
              class="form-group form-material floating"
              data-plugin="formMaterial"
            >
              <input type="password" class="form-control" name="password" />
              <label class="floating-label">Пароль</label>
            </div>
            <div class="form-group clearfix">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Запомнить</label
                >
              </div>
              <a class="float-right" href="forgot-password.html"
                >Забыли пароль?</a
              >
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block btn-lg mt-40"
            >
              Войти
            </button>
          </form>
          <p>
            Впервые у нас? Тогда вам нужна
            <a href="register-v3.html">Регистрация</a>
          </p>
        </div>
      </div>

      <footer>
        <p>WEBSITE BY Germes Creation Studio</p>
        <p>© 2020. All RIGHT RESERVED.</p>
        <div class="social">
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-twitter" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-facebook" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

$width: 400px;
$wform: 320px;

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
    .brand-img {
      width: 4rem;
    }

    .brand-text {
      font-size: 1.3rem !important;
      font-weight: bold;
      margin-top: 8px;
      font-family: "Montserrat", sans-serif;
    }
  }

  form {
    width: $wform;
    margin: ($width - $wform)/2 0;
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
