export default class LocalStorage {
  #storage = localStorage

  save(data) {
    this.#storage.setItem('score', data)
  }

  get() {
    return this.#storage.getItem('score')
  }

  clear() {
    this.#storage.clear()
  }
}
