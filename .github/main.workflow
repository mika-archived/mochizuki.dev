workflow "Deploy workflow" {
  on = "push"
  resolves = ["Deploy to Fly"]
}

action "Run only master branch" {
  uses  = "actions/bin/filter@master"
  args  = "branch master"
}

action "Install Dependencies" {
  uses  = "nuxt/actions-yarn@master"
  needs = "Run only master branch"
  args  = "install"
}

action "Build Static Files" {
  uses  = "nuxt/actions-yarn@master"
  needs = "Install Dependencies"
  args  = "build"
}

action "Deploy to Fly" {
  uses  = "mika-f/action-deploy-to-flyio@master"
  needs = ["Build Static Files"]
  secrets = ["FLY_ACCESS_TOKEN"]
}
