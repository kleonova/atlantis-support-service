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
            <div class="form-group">
              <input type="email" class="form-control" name="email" />
              <label class="floating-label">Электронная почта</label>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="password" />
              <label class="floating-label">Пароль</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="password" />
              <label class="floating-label">Номер договора</label>
            </div>
            <div class="form-group block-actions">
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
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
            <a href="register-v3.html">Войти</a>
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
export default {
  name: "Register"
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
