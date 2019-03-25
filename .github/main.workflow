workflow "Deploy workflow" {
  on = "push"
  resolves = ["Deploy to Fly"]
}

action "Install Dependencies" {
  uses  = "nuxt/actions-yarn@master"
  args  = "install"
}

action "Build Static Files" {
  uses  = "nuxt/actions-yarn@master"
  needs = "Install Dependencies"
  args  = "build"
}

action "Run only master branch" {
  uses  = "actions/bin/filter@master"
  needs = "Build Static Files"
  args  = "branch master"
}

action "Deploy to Fly" {
  uses  = "./"
  needs = ["Run only master branch"]
  secrets = ["FLY_ACCESS_TOKEN"]
}
