SHELL := /bin/bash

# Local

.PHONY: config
config:
	@echo "====== CONFIG ======"
	git config --global --add safe.directory '*'

.PHONY: profile
profile:
	@echo "====== PROFILE ======"
	echo "alias m=make" >> ~/.profile
	alias m=make
	source ~/.profile

.PHONY: bash
bash:
	@echo "====== BASH PROFILE ======"
	echo "alias m=make" >> ~/.bashrc
	source ~/.bashrc

.PHONY: installgitflow
installgitflow:
	@echo "====== INSTALL GITFLOW ======"
	sudo apt-get update
	sudo apt-get install git-flow


all : config installgitflow
.PHONY : all

.DEFAULT_GOAL := all
