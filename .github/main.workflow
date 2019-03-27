workflow "Build, Test and Deploy on push" {
  on = "push"
  resolves = ["Deploy app to fly.io"]
}

action "Install Node dependencies" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Run tests " {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install Node dependencies"]
  args = "test --ci --coverage"
}

action "Build app" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install Node dependencies"]
  args = "build"
}

action "Run only master branch" {
  uses = "actions/bin/filter@master"
  needs = ["Run tests ", "Build app"]
  args = "branch master"
}

action "Deploy app to fly.io" {
  uses = "mika-f/action-deploy-to-flyio@master"
  needs = ["Run only master branch"]
  secrets = ["FLY_ACCESS_TOKEN"]
}
