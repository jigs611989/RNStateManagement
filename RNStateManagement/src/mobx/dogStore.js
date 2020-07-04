import {observable} from 'mobx'

class ObservableDogStore {
  @observable dog = {
    url: '',
    loading: false,
    error: false,
  }

  updateDog (url, loading, error) {
    this.dog = {
      url, 
      loading, 
      error
    }
  }

}

const observableDogStore = new ObservableDogStore()
export default observableDogStore
